export type AreaId = 'lb1' | 'lb2' | 'lb3' | 'all';
export type Difficulty = 'leicht' | 'mittel' | 'schwer';

export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  areaId: AreaId;
  question: string;
  answers: Answer[];
  explanation: string;
  difficulty: Difficulty;
  topic: string;
}

export interface LearningArea {
  id: AreaId;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}

export interface AttemptAnswer {
  questionId: string;
  selectedAnswerId: string | null;
  isCorrect: boolean;
  timeSpentMs: number;
}

export interface QuizAttempt {
  id: string;
  areaId: AreaId;
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  grade: number;
  gradeLabel: string;
  percentage: number;
  timePerQuestion: number;
  durationMs: number;
  answers: AttemptAnswer[];
}

export interface UserProgress {
  version: 1;
  attempts: QuizAttempt[];
  achievements: string[];
  streakDays: string[];
  lastPracticeDate: string | null;
  totalXP: number;
  hasSeenWelcome: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (progress: UserProgress) => boolean;
}

export type Screen =
  | { type: 'welcome' }
  | { type: 'dashboard' }
  | { type: 'learn'; areaId: AreaId }
  | { type: 'quizConfig'; areaId: AreaId }
  | { type: 'quiz'; areaId: AreaId; questionCount: number; timePerQuestion: number }
  | { type: 'result'; attempt: QuizAttempt }
  | { type: 'progress' };

export type QuizPhase = 'active' | 'review';
