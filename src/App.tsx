import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { Toast } from './components/ui/Toast';
import { WelcomeScreen } from './components/screens/WelcomeScreen';
import { DashboardScreen } from './components/screens/DashboardScreen';
import { LearnScreen } from './components/screens/LearnScreen';
import { QuizConfigScreen } from './components/screens/QuizConfigScreen';
import { QuizScreen } from './components/screens/QuizScreen';
import { ResultScreen } from './components/screens/ResultScreen';
import { ProgressScreen } from './components/screens/ProgressScreen';
import { useProgress } from './hooks/useProgress';
import { useAudio } from './hooks/useAudio';
import { loadDarkMode, saveDarkMode } from './lib/storage';
import { achievements } from './data/achievements';
import type { Screen, AreaId, QuizAttempt } from './types';

function App() {
  const {
    progress,
    markWelcomeSeen,
    addAttempt,
    unlockAchievement,
    getBestGrade,
    getAreaAttemptCount,
    getCurrentStreak,
    getTotalQuestionsAnswered,
  } = useProgress();

  const { play, isMuted, toggleMute } = useAudio();
  const [isDark, setIsDark] = useState(() => loadDarkMode());
  const [toast, setToast] = useState<{ message: string; subtitle?: string } | null>(null);

  const [screen, setScreen] = useState<Screen>(() =>
    progress.hasSeenWelcome ? { type: 'dashboard' } : { type: 'welcome' },
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleDark = useCallback(() => {
    setIsDark(prev => {
      const next = !prev;
      saveDarkMode(next);
      return next;
    });
  }, []);

  const handleWelcomeStart = useCallback(() => {
    markWelcomeSeen();
    setScreen({ type: 'dashboard' });
  }, [markWelcomeSeen]);

  const handleSelectArea = useCallback((areaId: AreaId) => {
    setScreen({ type: 'quizConfig', areaId });
  }, []);

  const handleLearnArea = useCallback((areaId: AreaId) => {
    setScreen({ type: 'learn', areaId });
  }, []);

  const handleStartQuiz = useCallback((areaId: AreaId, questionCount: number, timePerQuestion: number) => {
    setScreen({ type: 'quiz', areaId, questionCount, timePerQuestion });
  }, []);

  const handleLearnToQuiz = useCallback((areaId: AreaId) => {
    setScreen({ type: 'quizConfig', areaId });
  }, []);

  const checkAchievements = useCallback((updatedProgress: typeof progress) => {
    for (const achievement of achievements) {
      if (!updatedProgress.achievements.includes(achievement.id) && achievement.condition(updatedProgress)) {
        unlockAchievement(achievement.id);
        play('achievement');
        setToast({ message: achievement.title, subtitle: achievement.description });
      }
    }
  }, [unlockAchievement, play]);

  const handleQuizComplete = useCallback((attempt: QuizAttempt) => {
    play('quizComplete');
    addAttempt(attempt);
    setScreen({ type: 'result', attempt });

    setTimeout(() => {
      const updated = { ...progress, attempts: [...progress.attempts, attempt] };
      checkAchievements(updated);
    }, 500);
  }, [addAttempt, play, progress, checkAchievements]);

  const handleRetry = useCallback(() => {
    if (screen.type === 'result') {
      setScreen({ type: 'quizConfig', areaId: screen.attempt.areaId });
    }
  }, [screen]);

  const handleHome = useCallback(() => {
    setScreen({ type: 'dashboard' });
  }, []);

  const handleTabChange = useCallback((tab: 'learn' | 'progress') => {
    setScreen(tab === 'learn' ? { type: 'dashboard' } : { type: 'progress' });
  }, []);

  const handleBack = useCallback(() => {
    if (screen.type === 'quizConfig' || screen.type === 'result' || screen.type === 'learn') {
      setScreen({ type: 'dashboard' });
    }
  }, [screen]);

  const showHeader = screen.type !== 'welcome';
  const showNav = screen.type === 'dashboard' || screen.type === 'progress';
  const showBack = screen.type === 'quizConfig' || screen.type === 'result' || screen.type === 'learn';

  const headerTitle = screen.type === 'quizConfig'
    ? 'Quiz konfigurieren'
    : screen.type === 'quiz'
      ? 'Quiz'
      : screen.type === 'result'
        ? 'Ergebnis'
        : screen.type === 'progress'
          ? 'Fortschritt'
          : screen.type === 'learn'
            ? 'Lernmodus'
            : 'Ethik R9';

  return (
    <div className="min-h-dvh bg-bg text-text">
      {showHeader && (
        <Header
          title={headerTitle}
          onBack={showBack ? handleBack : undefined}
          isDark={isDark}
          onToggleDark={toggleDark}
          isMuted={isMuted}
          onToggleMute={toggleMute}
        />
      )}

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={screen.type + (screen.type === 'quizConfig' ? screen.areaId : screen.type === 'learn' ? screen.areaId : '')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {screen.type === 'welcome' && (
              <WelcomeScreen onStart={handleWelcomeStart} />
            )}
            {screen.type === 'dashboard' && (
              <DashboardScreen
                onSelectArea={handleSelectArea}
                onLearnArea={handleLearnArea}
                getBestGrade={getBestGrade}
                getAreaAttemptCount={getAreaAttemptCount}
                streak={getCurrentStreak()}
                totalXP={progress.totalXP}
              />
            )}
            {screen.type === 'learn' && (
              <LearnScreen
                areaId={screen.areaId}
                onBack={handleHome}
                onStartQuiz={handleLearnToQuiz}
              />
            )}
            {screen.type === 'quizConfig' && (
              <QuizConfigScreen
                areaId={screen.areaId}
                onStart={(count, time) => handleStartQuiz(screen.areaId, count, time)}
              />
            )}
            {screen.type === 'quiz' && (
              <QuizScreen
                areaId={screen.areaId}
                questionCount={screen.questionCount}
                timePerQuestion={screen.timePerQuestion}
                onComplete={handleQuizComplete}
                playSound={play}
              />
            )}
            {screen.type === 'result' && (
              <ResultScreen
                attempt={screen.attempt}
                onRetry={handleRetry}
                onHome={handleHome}
              />
            )}
            {screen.type === 'progress' && (
              <ProgressScreen
                progress={progress}
                streak={getCurrentStreak()}
                getBestGrade={getBestGrade}
                totalQuestions={getTotalQuestionsAnswered()}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {showNav && (
        <BottomNav
          activeTab={screen.type === 'progress' ? 'progress' : 'learn'}
          onTabChange={handleTabChange}
        />
      )}

      <Toast
        message={toast?.message ?? ''}
        subtitle={toast?.subtitle}
        visible={toast !== null}
        onClose={() => setToast(null)}
      />
    </div>
  );
}

export default App;
