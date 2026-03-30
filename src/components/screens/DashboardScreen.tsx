import { motion } from 'framer-motion';
import * as icons from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProgressBar } from '../gamification/ProgressBar';
import { learningAreas } from '../../data/learning-areas';
import { getQuestionsByArea } from '../../data/questions';
import { GRADE_COLORS } from '../../lib/constants';
import { clsx } from 'clsx';
import type { AreaId } from '../../types';
import { Flame, Zap } from 'lucide-react';

interface DashboardScreenProps {
  onSelectArea: (areaId: AreaId) => void;
  getBestGrade: (areaId: AreaId) => number | null;
  getAreaAttemptCount: (areaId: AreaId) => number;
  streak: number;
  totalXP: number;
}

const areaColorMap: Record<string, string> = {
  lb1: 'bg-lb1',
  lb2: 'bg-lb2',
  lb3: 'bg-lb3',
};

const areaBorderMap: Record<string, string> = {
  lb1: 'border-lb1/30',
  lb2: 'border-lb2/30',
  lb3: 'border-lb3/30',
};

const areaIconBgMap: Record<string, string> = {
  lb1: 'bg-lb1/10 text-lb1',
  lb2: 'bg-lb2/10 text-lb2',
  lb3: 'bg-lb3/10 text-lb3',
};

export function DashboardScreen({ onSelectArea, getBestGrade, getAreaAttemptCount, streak, totalXP }: DashboardScreenProps) {
  return (
    <div className="px-4 pb-24 pt-4 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h2 className="text-xl font-bold">Ethik R9</h2>
        <p className="text-sm text-text-muted mt-1">Waehle einen Lernbereich zum Ueben</p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-3 mb-6"
      >
        <Card padding="sm" className="flex-1 flex items-center gap-2">
          <Flame size={18} className="text-warning" />
          <div>
            <p className="text-lg font-bold leading-none">{streak}</p>
            <p className="text-[10px] text-text-muted">Tage-Streak</p>
          </div>
        </Card>
        <Card padding="sm" className="flex-1 flex items-center gap-2">
          <Zap size={18} className="text-primary" />
          <div>
            <p className="text-lg font-bold leading-none">{totalXP}</p>
            <p className="text-[10px] text-text-muted">XP gesammelt</p>
          </div>
        </Card>
      </motion.div>

      {/* Area Cards */}
      <div className="space-y-3">
        {learningAreas.map((area, i) => {
          const IconComponent = (icons as unknown as Record<string, icons.LucideIcon>)[area.icon] ?? icons.BookOpen;
          const totalQuestions = getQuestionsByArea(area.id).length;
          const attempts = getAreaAttemptCount(area.id);
          const bestGrade = getBestGrade(area.id);

          return (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
            >
              <Card
                padding="lg"
                className={clsx('relative overflow-hidden', areaBorderMap[area.color])}
              >
                <div className={clsx('absolute top-0 right-0 w-24 h-24 rounded-full -mr-8 -mt-8 opacity-10', areaColorMap[area.color])} />

                <div className="flex items-start gap-3">
                  <div className={clsx('w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0', areaIconBgMap[area.color])}>
                    <IconComponent size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-text-muted font-medium">{area.subtitle}</p>
                        <h3 className="text-base font-bold">{area.title}</h3>
                      </div>
                      {bestGrade !== null && (
                        <div className={clsx('text-2xl font-extrabold', GRADE_COLORS[bestGrade])}>
                          {bestGrade}
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">{area.description}</p>

                    <div className="mt-3">
                      <div className="flex justify-between text-[10px] text-text-muted mb-1">
                        <span>{totalQuestions} Fragen verfuegbar</span>
                        <span>{attempts} Versuche</span>
                      </div>
                      <ProgressBar
                        value={Math.min(attempts, 10)}
                        max={10}
                        colorClass={areaColorMap[area.color]}
                      />
                    </div>

                    <Button
                      size="sm"
                      className="mt-3 w-full"
                      onClick={() => onSelectArea(area.id)}
                    >
                      Quiz starten
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
