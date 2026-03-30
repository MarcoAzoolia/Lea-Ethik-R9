import type { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first-quiz',
    title: 'Erste Schritte',
    description: 'Erstes Quiz abgeschlossen',
    icon: 'Sparkles',
    condition: (p) => p.attempts.length >= 1,
  },
  {
    id: 'perfect-score',
    title: 'Perfekt!',
    description: '100% in einem Quiz erreicht',
    icon: 'Crown',
    condition: (p) => p.attempts.some(a => a.percentage === 100),
  },
  {
    id: 'all-areas',
    title: 'Vielseitig',
    description: 'Mindestens ein Quiz in jedem Lernbereich',
    icon: 'Layers',
    condition: (p) => {
      const areas = new Set(p.attempts.map(a => a.areaId));
      return areas.size >= 3;
    },
  },
  {
    id: 'streak-3',
    title: '3 Tage am Stueck',
    description: '3 Tage hintereinander gelernt',
    icon: 'Flame',
    condition: (p) => {
      const days = [...p.streakDays].sort().reverse();
      if (days.length < 3) return false;
      let streak = 1;
      for (let i = 1; i < days.length; i++) {
        const prev = new Date(days[i - 1]);
        const curr = new Date(days[i]);
        const diff = Math.round((prev.getTime() - curr.getTime()) / 86400000);
        if (diff === 1) { streak++; if (streak >= 3) return true; }
        else break;
      }
      return false;
    },
  },
  {
    id: 'streak-7',
    title: 'Eine Woche dabei',
    description: '7 Tage hintereinander gelernt',
    icon: 'Trophy',
    condition: (p) => {
      const days = [...p.streakDays].sort().reverse();
      if (days.length < 7) return false;
      let streak = 1;
      for (let i = 1; i < days.length; i++) {
        const prev = new Date(days[i - 1]);
        const curr = new Date(days[i]);
        const diff = Math.round((prev.getTime() - curr.getTime()) / 86400000);
        if (diff === 1) { streak++; if (streak >= 7) return true; }
        else break;
      }
      return false;
    },
  },
  {
    id: 'fifty-questions',
    title: 'Halbzeit',
    description: '50 Fragen beantwortet',
    icon: 'Target',
    condition: (p) => p.attempts.reduce((s, a) => s + a.totalQuestions, 0) >= 50,
  },
  {
    id: 'hundred-questions',
    title: 'Hundert geschafft',
    description: '100 Fragen beantwortet',
    icon: 'Medal',
    condition: (p) => p.attempts.reduce((s, a) => s + a.totalQuestions, 0) >= 100,
  },
  {
    id: 'grade-1-lb1',
    title: 'Friedensprofi',
    description: 'Note 1 in Friedensethik',
    icon: 'Shield',
    condition: (p) => p.attempts.some(a => a.areaId === 'lb1' && a.grade === 1),
  },
  {
    id: 'grade-1-lb2',
    title: 'Sinnfinderin',
    description: 'Note 1 in Sinnsuche im Leben',
    icon: 'Compass',
    condition: (p) => p.attempts.some(a => a.areaId === 'lb2' && a.grade === 1),
  },
  {
    id: 'grade-1-lb3',
    title: 'Weltreligions-Expertin',
    description: 'Note 1 in Ethik der Weltreligionen',
    icon: 'Globe',
    condition: (p) => p.attempts.some(a => a.areaId === 'lb3' && a.grade === 1),
  },
  {
    id: 'speed-demon',
    title: 'Blitzschnell',
    description: 'Durchschnittlich unter 10 Sekunden pro Frage',
    icon: 'Zap',
    condition: (p) => p.attempts.some(a => {
      const avg = a.durationMs / a.totalQuestions;
      return avg < 10000 && a.totalQuestions >= 5;
    }),
  },
];
