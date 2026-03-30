import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { QuestionCard } from '../quiz/QuestionCard';
import { AnswerOption } from '../quiz/AnswerOption';
import { QuestionCounter } from '../quiz/QuestionCounter';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { getQuestionsByArea } from '../../data/questions';
import { learningAreas } from '../../data/learning-areas';
import { shuffle } from '../../lib/shuffle';
import type { AreaId, Question, QuizPhase } from '../../types';

interface LearnScreenProps {
  areaId: AreaId;
  onBack: () => void;
  onStartQuiz: (areaId: AreaId) => void;
}

export function LearnScreen({ areaId, onBack, onStartQuiz }: LearnScreenProps) {
  const area = learningAreas.find(a => a.id === areaId);

  const questions = useMemo<Question[]>(() => {
    const all = getQuestionsByArea(areaId);
    return shuffle(all).map(q => ({
      ...q,
      answers: shuffle(q.answers),
    }));
  }, [areaId]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<QuizPhase>('active');
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleSelect = useCallback((answerId: string) => {
    if (phase !== 'active') return;
    const isCorrect = currentQuestion.answers.find(a => a.id === answerId)?.isCorrect ?? false;
    setSelectedAnswerId(answerId);
    setPhase('review');
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    } else {
      setWrongIds(prev => [...prev, currentQuestion.id]);
    }
  }, [phase, currentQuestion]);

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= questions.length) {
      setIsFinished(true);
      return;
    }
    setCurrentIndex(nextIndex);
    setPhase('active');
    setSelectedAnswerId(null);
  }, [currentIndex, questions.length]);

  // Group questions by topic for the summary
  const topics = useMemo(() => {
    const topicMap = new Map<string, { total: number; wrong: number }>();
    for (const q of questions) {
      const entry = topicMap.get(q.topic) ?? { total: 0, wrong: 0 };
      entry.total++;
      if (wrongIds.includes(q.id)) entry.wrong++;
      topicMap.set(q.topic, entry);
    }
    return topicMap;
  }, [questions, wrongIds]);

  if (isFinished) {
    const wrongCount = questions.length - correctCount;
    return (
      <div className="px-4 pb-24 pt-4 max-w-lg mx-auto">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-xl font-bold text-center">Lernmodus abgeschlossen</h2>
          <p className="text-sm text-text-muted text-center mt-1">{area?.title}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6"
        >
          <Card padding="lg" className="mb-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <CheckCircle size={18} className="text-success" />
                  <p className="text-2xl font-bold text-success">{correctCount}</p>
                </div>
                <p className="text-xs text-text-muted">Gewusst</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <XCircle size={18} className="text-error" />
                  <p className="text-2xl font-bold text-error">{wrongCount}</p>
                </div>
                <p className="text-xs text-text-muted">Noch lernen</p>
              </div>
            </div>
          </Card>

          {wrongCount > 0 && (
            <Card padding="md" className="mb-4">
              <p className="text-sm font-semibold mb-2">Diese Themen nochmal wiederholen:</p>
              <ul className="space-y-1">
                {[...topics.entries()]
                  .filter(([, v]) => v.wrong > 0)
                  .map(([topic, v]) => (
                    <li key={topic} className="text-sm text-text-muted flex justify-between">
                      <span>{topic}</span>
                      <span className="text-error font-medium">{v.wrong} falsch</span>
                    </li>
                  ))}
              </ul>
            </Card>
          )}

          <div className="flex gap-2">
            <Button variant="secondary" size="md" className="flex-1" onClick={onBack}>
              <ArrowLeft size={16} className="mr-1 inline" />
              Zurueck
            </Button>
            <Button size="md" className="flex-1" onClick={() => onStartQuiz(areaId)}>
              Quiz starten
              <ChevronRight size={16} className="ml-1 inline" />
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="px-4 pb-24 pt-4 max-w-lg mx-auto">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <QuestionCounter current={currentIndex + 1} total={questions.length} />
          <div className="flex items-center gap-1 text-xs text-text-muted">
            <BookOpen size={14} />
            <span>Lernmodus</span>
          </div>
        </div>
        {/* Progress bar instead of timer */}
        <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + (phase === 'review' ? 1 : 0)) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <QuestionCard question={currentQuestion.question} topic={currentQuestion.topic} />

          <div className="mt-4 space-y-2">
            {currentQuestion.answers.map((answer, i) => (
              <AnswerOption
                key={answer.id}
                id={answer.id}
                text={answer.text}
                isCorrect={answer.isCorrect}
                isSelected={selectedAnswerId === answer.id}
                phase={phase}
                onSelect={() => handleSelect(answer.id)}
                index={i}
              />
            ))}
          </div>

          {phase === 'review' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-3">
                <p className="text-xs text-primary font-semibold mb-1">Das solltest du wissen</p>
                <p className="text-sm text-text leading-relaxed">{currentQuestion.explanation}</p>
              </div>
              <Button size="md" className="w-full" onClick={handleNext}>
                {currentIndex + 1 < questions.length ? 'Weiter lernen' : 'Zusammenfassung'}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
