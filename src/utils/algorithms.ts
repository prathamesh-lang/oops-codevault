import type { PracticalAlgorithm } from '../data/types';
import { allPracticals } from '../data/practicals_data';

export function getAlgorithmForPractical(id: number): PracticalAlgorithm | undefined {
  const practical = allPracticals.find(p => p.id === id);
  return practical?.algorithm;
}
