import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Lightbulb,
  GraduationCap,
  Sparkles,
  RotateCcw,
  Trophy,
  AlertTriangle,
} from 'lucide-react';
import { QuestionCard } from '../quiz/QuestionCard';
import { AnswerOption } from '../quiz/AnswerOption';
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

type LearnMode = 'learn' | 'transition' | 'quiz' | 'summary';

interface TopicCard {
  topic: string;
  explanations: { question: string; explanation: string }[];
}

export function LearnScreen({ areaId, onBack, onStartQuiz }: LearnScreenProps) {
  const area = learningAreas.find(a => a.id === areaId);

  // Group questions by topic for learn cards
  const topicCards = useMemo<TopicCard[]>(() => {
    const all = getQuestionsByArea(areaId);
    const topicMap = new Map<string, { question: string; explanation: string }[]>();
    for (const q of all) {
      const entries = topicMap.get(q.topic) ?? [];
      entries.push({ question: q.question, explanation: q.explanation });
      topicMap.set(q.topic, entries);
    }
    return Array.from(topicMap.entries()).map(([topic, explanations]) => ({
      topic,
      explanations,
    }));
  }, [areaId]);

  // Shuffled questions for quiz phase
  const quizQuestions = useMemo<Question[]>(() => {
    const all = getQuestionsByArea(areaId);
    return shuffle(all).map(q => ({
      ...q,
      answers: shuffle(q.answers),
    }));
  }, [areaId]);

  // --- State ---
  const [mode, setMode] = useState<LearnMode>('learn');

  // Learn phase state
  const [learnIndex, setLearnIndex] = useState(0);

  // Quiz phase state
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizPhase, setQuizPhase] = useState<QuizPhase>('active');
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);

  const currentTopic = topicCards[learnIndex];
  const currentQuestion = quizQuestions[quizIndex];

  // --- Learn phase handlers ---
  const handleLearnNext = useCallback(() => {
    if (learnIndex + 1 >= topicCards.length) {
      setMode('transition');
      return;
    }
    setLearnIndex(prev => prev + 1);
  }, [learnIndex, topicCards.length]);

  const handleLearnPrev = useCallback(() => {
    if (learnIndex > 0) {
      setLearnIndex(prev => prev - 1);
    }
  }, [learnIndex]);

  const handleStartQuizPhase = useCallback(() => {
    setMode('quiz');
    setQuizIndex(0);
    setQuizPhase('active');
    setSelectedAnswerId(null);
    setCorrectCount(0);
    setWrongIds([]);
  }, []);

  // --- Quiz phase handlers ---
  const handleSelect = useCallback((answerId: string) => {
    if (quizPhase !== 'active') return;
    const isCorrect = currentQuestion.answers.find(a => a.id === answerId)?.isCorrect ?? false;
    setSelectedAnswerId(answerId);
    setQuizPhase('review');
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    } else {
      setWrongIds(prev => [...prev, currentQuestion.id]);
    }
  }, [quizPhase, currentQuestion]);

  const handleQuizNext = useCallback(() => {
    if (quizIndex + 1 >= quizQuestions.length) {
      setMode('summary');
      return;
    }
    setQuizIndex(prev => prev + 1);
    setQuizPhase('active');
    setSelectedAnswerId(null);
  }, [quizIndex, quizQuestions.length]);

  // Topic stats for summary
  const topicStats = useMemo(() => {
    const map = new Map<string, { total: number; wrong: number }>();
    for (const q of quizQuestions) {
      const entry = map.get(q.topic) ?? { total: 0, wrong: 0 };
      entry.total++;
      if (wrongIds.includes(q.id)) entry.wrong++;
      map.set(q.topic, entry);
    }
    return map;
  }, [quizQuestions, wrongIds]);

  // --- RENDER: Learn Phase ---
  if (mode === 'learn') {
    const progress = ((learnIndex + 1) / topicCards.length) * 100;

    return (
      <div className="px-4 pb-24 pt-4 max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={onBack}
              className="flex items-center gap-1 text-sm text-text-muted hover:text-text transition-colors cursor-pointer"
              aria-label="Zurueck zur Uebersicht"
            >
              <ArrowLeft size={16} />
              <span>Zurueck</span>
            </button>
            <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
              <BookOpen size={14} />
              <span>Lernphase</span>
            </div>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs text-text-muted font-medium whitespace-nowrap">
              Thema {learnIndex + 1} von {topicCards.length}
            </span>
            <div className="flex-1 h-2 rounded-full bg-surface-alt overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        {/* Learn Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={learnIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
          >
            <Card padding="lg" className="border-primary/20 bg-linear-to-br from-surface to-primary/3">
              {/* Topic header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb size={20} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-text leading-tight">
                    {currentTopic.topic}
                  </h2>
                  <p className="text-xs text-text-muted mt-0.5">{area?.title}</p>
                </div>
              </div>

              {/* Explanations */}
              <div className="space-y-4">
                {currentTopic.explanations.map((item, i) => (
                  <div key={i} className="space-y-1.5">
                    {currentTopic.explanations.length > 1 && (
                      <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide">
                        Aspekt {i + 1}
                      </p>
                    )}
                    <p className="text-sm text-text-muted italic leading-relaxed">
                      {item.question}
                    </p>
                    <p className="text-sm text-text leading-relaxed">
                      {item.explanation}
                    </p>
                    {i < currentTopic.explanations.length - 1 && (
                      <div className="border-t border-border/50 pt-2 mt-2" />
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Navigation buttons */}
            <div className="mt-4 flex gap-2">
              {learnIndex > 0 && (
                <Button
                  variant="secondary"
                  size="md"
                  onClick={handleLearnPrev}
                  aria-label="Vorheriges Thema"
                >
                  <ChevronLeft size={18} />
                </Button>
              )}
              <Button
                size="md"
                className="flex-1"
                onClick={handleLearnNext}
              >
                <span className="flex items-center justify-center gap-2">
                  {learnIndex + 1 < topicCards.length ? (
                    <>
                      Verstanden
                      <ChevronRight size={18} />
                    </>
                  ) : (
                    <>
                      Alles gelesen
                      <CheckCircle size={18} />
                    </>
                  )}
                </span>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // --- RENDER: Transition ---
  if (mode === 'transition') {
    return (
      <div className="px-4 pb-24 pt-4 max-w-lg mx-auto flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            className="w-20 h-20 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-6"
          >
            <Sparkles size={40} className="text-success" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-2xl font-bold text-text mb-2"
          >
            Gut gemacht!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto mb-2"
          >
            Du hast alle {topicCards.length} Themen durchgelesen.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto mb-8"
          >
            Jetzt pruefen wir, ob du alles verstanden hast. Kein Zeitdruck -- nimm dir so viel Zeit wie du brauchst.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col gap-3 w-full max-w-xs mx-auto"
          >
            <Button size="lg" className="w-full" onClick={handleStartQuizPhase}>
              <span className="flex items-center justify-center gap-2">
                <GraduationCap size={20} />
                Wissen testen
              </span>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => { setLearnIndex(0); setMode('learn'); }}>
              <span className="flex items-center justify-center gap-2">
                <RotateCcw size={14} />
                Nochmal durchlesen
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // --- RENDER: Quiz Phase ---
  if (mode === 'quiz') {
    const quizProgress = ((quizIndex + (quizPhase === 'review' ? 1 : 0)) / quizQuestions.length) * 100;

    return (
      <div className="px-4 pb-24 pt-4 max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-text-muted font-medium">
              Frage {quizIndex + 1} von {quizQuestions.length}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-text-muted font-medium">
              <GraduationCap size={14} />
              <span>Wissenstest</span>
            </div>
          </div>
          <div className="h-2 rounded-full bg-surface-alt overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{ width: `${quizProgress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={quizIndex}
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
                  phase={quizPhase}
                  onSelect={() => handleSelect(answer.id)}
                  index={i}
                />
              ))}
            </div>

            {quizPhase === 'review' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4"
              >
                {/* Feedback */}
                {selectedAnswerId && currentQuestion.answers.find(a => a.id === selectedAnswerId)?.isCorrect ? (
                  <div className="p-4 rounded-xl bg-success/5 border border-success/20 mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle size={16} className="text-success" />
                      <p className="text-xs text-success font-semibold">Richtig!</p>
                    </div>
                    <p className="text-sm text-text leading-relaxed">{currentQuestion.explanation}</p>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-error/5 border border-error/20 mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <XCircle size={16} className="text-error" />
                      <p className="text-xs text-error font-semibold">Nicht ganz</p>
                    </div>
                    <p className="text-sm text-text leading-relaxed">{currentQuestion.explanation}</p>
                  </div>
                )}

                <Button size="md" className="w-full" onClick={handleQuizNext}>
                  {quizIndex + 1 < quizQuestions.length ? 'Naechste Frage' : 'Ergebnis anzeigen'}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // --- RENDER: Summary ---
  const wrongCount = quizQuestions.length - correctCount;
  const percentage = Math.round((correctCount / quizQuestions.length) * 100);
  const topicsToRepeat = [...topicStats.entries()].filter(([, v]) => v.wrong > 0);

  return (
    <div className="px-4 pb-24 pt-4 max-w-lg mx-auto">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 15 }}
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
            percentage >= 80 ? 'bg-success/10' : percentage >= 50 ? 'bg-warning/10' : 'bg-error/10'
          }`}
        >
          {percentage >= 80 ? (
            <Trophy size={32} className="text-success" />
          ) : percentage >= 50 ? (
            <GraduationCap size={32} className="text-warning" />
          ) : (
            <AlertTriangle size={32} className="text-error" />
          )}
        </motion.div>

        <h2 className="text-xl font-bold text-text">Lernmodus abgeschlossen</h2>
        <p className="text-sm text-text-muted mt-1">{area?.title} -- {percentage}% richtig</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        {/* Score card */}
        <Card padding="lg" className="mb-4">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <CheckCircle size={18} className="text-success" />
                <p className="text-2xl font-bold text-success">{correctCount}</p>
              </div>
              <p className="text-xs text-text-muted">Richtig</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <XCircle size={18} className="text-error" />
                <p className="text-2xl font-bold text-error">{wrongCount}</p>
              </div>
              <p className="text-xs text-text-muted">Falsch</p>
            </div>
          </div>
        </Card>

        {/* Topics to repeat */}
        {topicsToRepeat.length > 0 && (
          <Card padding="md" className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <RotateCcw size={14} className="text-warning" />
              <p className="text-sm font-semibold text-text">Diese Themen nochmal wiederholen:</p>
            </div>
            <ul className="space-y-2">
              {topicsToRepeat.map(([topic, v]) => (
                <li key={topic} className="flex justify-between items-center text-sm">
                  <span className="text-text-muted">{topic}</span>
                  <span className="text-error font-medium text-xs">
                    {v.wrong} von {v.total} falsch
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* All correct feedback */}
        {topicsToRepeat.length === 0 && (
          <Card padding="md" className="mb-4 border-success/20 bg-success/5">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-success" />
              <p className="text-sm font-medium text-success">
                Alles richtig! Du bist bereit fuer das Quiz.
              </p>
            </div>
          </Card>
        )}

        {/* Action buttons */}
        <div className="flex flex-col gap-2">
          <Button size="md" className="w-full" onClick={() => onStartQuiz(areaId)}>
            <span className="flex items-center justify-center gap-2">
              Quiz starten
              <ChevronRight size={18} />
            </span>
          </Button>

          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="md"
              className="flex-1"
              onClick={() => { setLearnIndex(0); setMode('learn'); }}
            >
              <span className="flex items-center justify-center gap-2">
                <BookOpen size={16} />
                Nochmal lernen
              </span>
            </Button>
            <Button
              variant="secondary"
              size="md"
              className="flex-1"
              onClick={onBack}
            >
              <span className="flex items-center justify-center gap-2">
                <ArrowLeft size={16} />
                Zurueck
              </span>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
