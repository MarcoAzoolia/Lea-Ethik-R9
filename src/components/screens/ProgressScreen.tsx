import { motion } from 'framer-motion';
import { Flame, Zap, Target, Award } from 'lucide-react';
import { Card } from '../ui/Card';
import { AchievementBadge } from '../gamification/AchievementBadge';
import { achievements } from '../../data/achievements';
import { learningAreas } from '../../data/learning-areas';
import { GRADE_COLORS } from '../../lib/constants';
import { clsx } from 'clsx';
import type { UserProgress, AreaId } from '../../types';

interface ProgressScreenProps {
  progress: UserProgress;
  streak: number;
  getBestGrade: (areaId: AreaId) => number | null;
  totalQuestions: number;
}

export function ProgressScreen({ progress, streak, getBestGrade, totalQuestions }: ProgressScreenProps) {
  return (
    <div className="px-4 pb-24 pt-4 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-bold">Dein Fortschritt</h2>
        <p className="text-sm text-text-muted mt-1">Statistiken und Erfolge</p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-3 mt-5"
      >
        <Card padding="md" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
            <Flame size={20} className="text-warning" />
          </div>
          <div>
            <p className="text-xl font-bold">{streak}</p>
            <p className="text-[10px] text-text-muted">Tage-Streak</p>
          </div>
        </Card>
        <Card padding="md" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Zap size={20} className="text-primary" />
          </div>
          <div>
            <p className="text-xl font-bold">{progress.totalXP}</p>
            <p className="text-[10px] text-text-muted">XP gesamt</p>
          </div>
        </Card>
        <Card padding="md" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
            <Target size={20} className="text-success" />
          </div>
          <div>
            <p className="text-xl font-bold">{totalQuestions}</p>
            <p className="text-[10px] text-text-muted">Fragen beantwortet</p>
          </div>
        </Card>
        <Card padding="md" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-lb2/10 flex items-center justify-center">
            <Award size={20} className="text-lb2" />
          </div>
          <div>
            <p className="text-xl font-bold">{progress.attempts.length}</p>
            <p className="text-[10px] text-text-muted">Quiz-Versuche</p>
          </div>
        </Card>
      </motion.div>

      {/* Best grades per area */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6"
      >
        <h3 className="text-sm font-semibold text-text-muted mb-3">Beste Noten</h3>
        <Card padding="md">
          <div className="space-y-3">
            {learningAreas.map(area => {
              const best = getBestGrade(area.id);
              return (
                <div key={area.id} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{area.title}</span>
                  {best !== null ? (
                    <span className={clsx('text-lg font-extrabold', GRADE_COLORS[best])}>{best}</span>
                  ) : (
                    <span className="text-sm text-text-muted">--</span>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6"
      >
        <h3 className="text-sm font-semibold text-text-muted mb-3">
          Erfolge ({progress.achievements.length}/{achievements.length})
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {achievements.map(achievement => (
            <AchievementBadge
              key={achievement.id}
              achievement={achievement}
              unlocked={progress.achievements.includes(achievement.id)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
