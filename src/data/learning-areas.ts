import type { LearningArea } from '../types';

export const learningAreas: LearningArea[] = [
  {
    id: 'lb1',
    title: 'Friedensethik',
    subtitle: 'Lernbereich 1',
    description: 'Gewaltfreie Kommunikation, Konflikte, Mediation, Grundrechte und Friedensarbeit',
    icon: 'Shield',
    color: 'lb1',
  },
  {
    id: 'lb2',
    title: 'Sinnsuche im Leben',
    subtitle: 'Lernbereich 2',
    description: 'Sinnfindung, Grenzsituationen, Trauer, Hospizbewegung und existenzielle Fragen',
    icon: 'Compass',
    color: 'lb2',
  },
  {
    id: 'lb3',
    title: 'Ethik der Weltreligionen',
    subtitle: 'Lernbereich 3',
    description: 'Weltreligionen, Religionsfreiheit, Weltethos und ethische Grundregeln',
    icon: 'Globe',
    color: 'lb3',
  },
  {
    id: 'all',
    title: 'Finaltest',
    subtitle: 'Alle Lernbereiche',
    description: 'Pruefungssimulation ueber alle drei Lernbereiche -- Friedensethik, Sinnsuche und Weltreligionen',
    icon: 'GraduationCap',
    color: 'final',
  },
];
