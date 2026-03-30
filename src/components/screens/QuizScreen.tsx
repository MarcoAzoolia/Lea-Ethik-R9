import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestionCard } from '../quiz/QuestionCard';
import { AnswerOption } from '../quiz/AnswerOption';
import { TimerBar } from '../quiz/TimerBar';
import { QuestionCounter } from '../quiz/QuestionCounter';
import { Button } from '../ui/Button';
import { useTimer } from '../../hooks/useTimer';
import { getQuestionsByArea } from '../../data/questions';
import { shuffle } from '../../lib/shuffle';
import { calculateGrade } from '../../lib/grading';
import type { AreaId, Question, AttemptAnswer, QuizAttempt, QuizPhase } from '../../types';

interface QuizScreenProps {
  areaId: AreaId;
  questionCount: number;
  timePerQuestion: number;
  onComplete: (attempt: QuizAttempt) => void;
  playSound: (name: 'correct' | 'wrong' | 'tick' | 'timerWarning') => void;
}

export function QuizScreen({ areaId, questionCount, timePerQuestion, onComplete, playSound }: QuizScreenProps) {
  const [questions] = useState<Question[]>(() => {
    const all = getQuestionsByArea(areaId);
    const selected = shuffle(all).slice(0, questionCount);
    return selected.map(q => ({
      ...q,
      answers: shuffle(q.answers),
    }));
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<QuizPhase>('active');
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [attemptAnswers, setAttemptAnswers] = useState<AttemptAnswer[]>([]);
  const questionStartRef = useRef(performance.now());
  const quizStartRef = useRef(performance.now());

  const currentQuestion = questions[currentIndex];

  const handleExpire = useCallback(() => {
    if (phase !== 'active') return;
    playSound('timerWarning');
    setSelectedAnswerId(null);
    setPhase('review');

    const timeSpent = performance.now() - questionStartRef.current;
    setAttemptAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      selectedAnswerId: null,
      isCorrect: false,
      timeSpentMs: Math.round(timeSpent),
    }]);
  }, [phase, currentQuestion, playSound]);

  const timer = useTimer({
    durationSeconds: timePerQuestion,
    onWarning: () => playSound('tick'),
    onExpire: handleExpire,
  });

  useEffect(() => {
    timer.reset(timePerQuestion);
    timer.start();
    questionStartRef.current = performance.now();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleSelect = useCallback((answerId: string) => {
    if (phase !== 'active') return;
    timer.stop();

    const isCorrect = currentQuestion.answers.find(a => a.id === answerId)?.isCorrect ?? false;
    playSound(isCorrect ? 'correct' : 'wrong');
    setSelectedAnswerId(answerId);
    setPhase('review');

    const timeSpent = performance.now() - questionStartRef.current;
    setAttemptAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      selectedAnswerId: answerId,
      isCorrect,
      timeSpentMs: Math.round(timeSpent),
    }]);
  }, [phase, currentQuestion, timer, playSound]);

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= questions.length) {
      const totalDuration = performance.now() - quizStartRef.current;
      const finalAnswers = attemptAnswers.length === questions.length
        ? attemptAnswers
        : [...attemptAnswers];
      const correctCount = finalAnswers.filter(a => a.isCorrect).length;
      const { grade, label, percentage } = calculateGrade(correctCount, questions.length);

      const attempt: QuizAttempt = {
        id: crypto.randomUUID(),
        areaId,
        date: new Date().toISOString(),
        totalQuestions: questions.length,
        correctAnswers: correctCount,
        grade,
        gradeLabel: label,
        percentage,
        timePerQuestion,
        durationMs: Math.round(totalDuration),
        answers: finalAnswers,
      };

      onComplete(attempt);
      return;
    }

    setCurrentIndex(nextIndex);
    setPhase('active');
    setSelectedAnswerId(null);
  }, [currentIndex, questions, attemptAnswers, areaId, timePerQuestion, onComplete]);

  return (
    <div className="px-4 pb-24 pt-4 max-w-lg mx-auto">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <QuestionCounter current={currentIndex + 1} total={questions.length} />
        </div>
        <TimerBar fraction={timer.fraction} remaining={timer.remaining} />
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
              <div className="p-3 rounded-xl bg-surface-alt border border-border mb-3">
                <p className="text-xs text-text-muted font-medium mb-1">Erklaerung</p>
                <p className="text-sm text-text leading-relaxed">{currentQuestion.explanation}</p>
              </div>
              <Button size="md" className="w-full" onClick={handleNext}>
                {currentIndex + 1 < questions.length ? 'Naechste Frage' : 'Ergebnis anzeigen'}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
