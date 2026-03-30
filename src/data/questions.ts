import type { Question, AreaId } from '../types';
import { questionsLB1 } from './questions-lb1';
import { questionsLB2 } from './questions-lb2';
import { questionsLB3 } from './questions-lb3';

export const allQuestions: Question[] = [
  ...questionsLB1,
  ...questionsLB2,
  ...questionsLB3,
];

export function getQuestionsByArea(areaId: AreaId): Question[] {
  switch (areaId) {
    case 'lb1': return questionsLB1;
    case 'lb2': return questionsLB2;
    case 'lb3': return questionsLB3;
    case 'all': return allQuestions;
  }
}
