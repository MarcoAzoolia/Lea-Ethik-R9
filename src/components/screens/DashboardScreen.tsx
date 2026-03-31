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
import { Flame, Zap, BookOpen, PlayCircle, GraduationCap, Trophy, ChevronRight } from 'lucide-react';

interface DashboardScreenProps {
  onSelectArea: (areaId: AreaId) => void;
  onLearnArea: (areaId: AreaId) => void;
  getBestGrade: (areaId: AreaId) => number | null;
  getAreaAttemptCount: (areaId: AreaId) => number;
  streak: number;
  totalXP: number;
}

const areaColorMap: Record<string, string> = {
  lb1: 'bg-lb1',
  lb2: 'bg-lb2',
  lb3: 'bg-lb3',
  final: 'bg-final',
};

const areaBorderMap: Record<string, string> = {
  lb1: 'border-lb1/30',
  lb2: 'border-lb2/30',
  lb3: 'border-lb3/30',
  final: 'border-final/30',
};

const areaIconBgMap: Record<string, string> = {
  lb1: 'bg-lb1/10 text-lb1',
  lb2: 'bg-lb2/10 text-lb2',
  lb3: 'bg-lb3/10 text-lb3',
  final: 'bg-final/10 text-final',
};

const areaLearnBtnMap: Record<string, string> = {
  lb1: 'border-lb1/30 text-lb1 hover:bg-lb1/10',
  lb2: 'border-lb2/30 text-lb2 hover:bg-lb2/10',
  lb3: 'border-lb3/30 text-lb3 hover:bg-lb3/10',
};

const areaQuizBtnMap: Record<string, string> = {
  lb1: 'bg-lb1 hover:bg-lb1/90 text-white',
  lb2: 'bg-lb2 hover:bg-lb2/90 text-white',
  lb3: 'bg-lb3 hover:bg-lb3/90 text-white',
};

const regularAreas = learningAreas.filter(a => a.id !== 'all');
const finalArea = learningAreas.find(a => a.id === 'all')!;

export function DashboardScreen({ onSelectArea, onLearnArea, getBestGrade, getAreaAttemptCount, streak, totalXP }: DashboardScreenProps) {
  return (
    <div className="px-4 pb-24 pt-4 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h2 className="text-xl font-bold">Ethik R9</h2>
        <p className="text-sm text-text-muted mt-1">Waehle einen Lernbereich zum Lernen oder Ueben</p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-3 mb-6"
      >
        <Card padding="sm" className="flex-1 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center">
            <Flame size={16} className="text-warning" />
          </div>
          <div>
            <p className="text-lg font-bold leading-none">{streak}</p>
            <p className="text-[10px] text-text-muted">Tage-Streak</p>
          </div>
        </Card>
        <Card padding="sm" className="flex-1 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Zap size={16} className="text-primary" />
          </div>
          <div>
            <p className="text-lg font-bold leading-none">{totalXP}</p>
            <p className="text-[10px] text-text-muted">XP gesammelt</p>
          </div>
        </Card>
      </motion.div>

      {/* Area Cards */}
      <div className="space-y-3">
        {regularAreas.map((area, i) => {
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
                        <div className={clsx(
                          'w-10 h-10 rounded-xl flex items-center justify-center text-xl font-extrabold',
                          bestGrade <= 2 ? 'bg-success/10' : bestGrade <= 4 ? 'bg-warning/10' : 'bg-error/10',
                          GRADE_COLORS[bestGrade],
                        )}>
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

                    <div className="flex gap-2 mt-3">
                      <button
                        className={clsx(
                          'flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-xl border transition-all duration-150 cursor-pointer active:scale-[0.97] bg-transparent',
                          areaLearnBtnMap[area.color],
                        )}
                        onClick={() => onLearnArea(area.id)}
                        aria-label={`${area.title} lernen`}
                      >
                        <BookOpen size={14} />
                        Lernen
                      </button>
                      <button
                        className={clsx(
                          'flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-150 cursor-pointer active:scale-[0.97] border-0',
                          areaQuizBtnMap[area.color],
                        )}
                        onClick={() => onSelectArea(area.id)}
                        aria-label={`${area.title} Quiz starten`}
                      >
                        <PlayCircle size={14} />
                        Quiz
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}

        {/* Final Test Card -- visually distinct */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + regularAreas.length * 0.08 }}
          className="mt-2"
        >
          <div className="relative rounded-2xl p-0.5 bg-linear-to-br from-final via-primary to-lb2">
            <div className="bg-surface rounded-[14px] p-6 relative overflow-hidden">
              {/* Decorative glow elements */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-10 -mt-10 opacity-15 bg-final" />
              <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full -ml-6 -mb-6 opacity-10 bg-primary" />

              <div className="relative">
                {/* Header with icon and badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-final/20 to-primary/20 flex items-center justify-center">
                      <GraduationCap size={24} className="text-final" />
                    </div>
                    <div>
                      <p className="text-xs text-final font-semibold tracking-wide uppercase">{finalArea.subtitle}</p>
                      <h3 className="text-lg font-extrabold">{finalArea.title}</h3>
                    </div>
                  </div>
                  {getBestGrade('all') !== null && (
                    <div className={clsx(
                      'w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-extrabold',
                      getBestGrade('all')! <= 2 ? 'bg-success/10' : getBestGrade('all')! <= 4 ? 'bg-warning/10' : 'bg-error/10',
                      GRADE_COLORS[getBestGrade('all')!],
                    )}>
                      {getBestGrade('all')}
                    </div>
                  )}
                </div>

                <p className="text-sm text-text-muted leading-relaxed">{finalArea.description}</p>

                <div className="mt-4">
                  <div className="flex justify-between text-[10px] text-text-muted mb-1">
                    <span>{getQuestionsByArea('all').length} Fragen aus allen Bereichen</span>
                    <span>{getAreaAttemptCount('all')} Versuche</span>
                  </div>
                  <ProgressBar
                    value={Math.min(getAreaAttemptCount('all'), 10)}
                    max={10}
                    colorClass="bg-final"
                  />
                </div>

                <button
                  className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-bold rounded-xl bg-linear-to-r from-final to-primary text-white transition-all duration-150 cursor-pointer active:scale-[0.97] hover:opacity-90 border-0"
                  onClick={() => onSelectArea('all')}
                  aria-label="Finaltest starten"
                >
                  <Trophy size={18} />
                  Finaltest starten
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
