import type { Practical, CategoryMetadata } from './types';
import { practicals1to5 } from './practicals_1_to_5';
import { practicals6to10 } from './practicals_6_to_10';

export const allPracticals: Practical[] = [
  ...practicals1to5,
  ...practicals6to10,
];

export const CATEGORY_COLORS: Record<string, string> = {
  'Operator Overloading': 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800',
  'Class Design & Records': 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800',
  'Inheritance & Exceptions': 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800',
  'Class Design & ADT': 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800',
  'Constructors & Destructors': 'text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800',
  'File Handling': 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800',
  'Inheritance': 'text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-900/30 border border-fuchsia-200 dark:border-fuchsia-800',
  'Templates & Generics': 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800',
  'STL Containers': 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800',
  'Exception Handling': 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800',
};

export const CATEGORIES_LIST: string[] = [
  'Operator Overloading',
  'Class Design & Records',
  'Inheritance & Exceptions',
  'Class Design & ADT',
  'Constructors & Destructors',
  'File Handling',
  'Inheritance',
  'Templates & Generics',
  'STL Containers',
  'Exception Handling',
];

export const CATEGORY_CARDS: CategoryMetadata[] = [
  {
    name: 'Operator Overloading',
    description: 'Arithmetic (+, *) and friend stream operators (<<, >>) for user types',
    iconName: 'Binary',
    badgeClass: 'text-indigo-600 bg-indigo-50 border-indigo-200 dark:bg-indigo-900/30 dark:border-indigo-800',
    count: 1,
  },
  {
    name: 'Class Design & ADT',
    description: 'Encapsulation, payroll systems, and 2D Matrix Abstract Data Types',
    iconName: 'Database',
    badgeClass: 'text-violet-600 bg-violet-50 border-violet-200 dark:bg-violet-900/30 dark:border-violet-800',
    count: 2,
  },
  {
    name: 'Inheritance Hierarchies',
    description: 'Single, multiple, multilevel, and hierarchical derivation architectures',
    iconName: 'GitBranch',
    badgeClass: 'text-purple-600 bg-purple-50 border-purple-200 dark:bg-purple-900/30 dark:border-purple-800',
    count: 2,
  },
  {
    name: 'Constructors & Destructors',
    description: 'Default, parameterized, copy constructors, and execution lifecycle order',
    iconName: 'Layers',
    badgeClass: 'text-pink-600 bg-pink-50 border-pink-200 dark:bg-pink-900/30 dark:border-pink-800',
    count: 1,
  },
  {
    name: 'File Streams (I/O)',
    description: 'Persistent disk storage with ofstream and line-by-line reading with ifstream',
    iconName: 'FileText',
    badgeClass: 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-900/30 dark:border-emerald-800',
    count: 1,
  },
  {
    name: 'Templates & Generics',
    description: 'Generic class templates for type-independent data containers',
    iconName: 'Code',
    badgeClass: 'text-teal-600 bg-teal-50 border-teal-200 dark:bg-teal-900/30 dark:border-teal-800',
    count: 1,
  },
  {
    name: 'STL Associative Containers',
    description: 'std::map key-value pair mapping, iterators, and logarithmic lookups',
    iconName: 'Search',
    badgeClass: 'text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-900/30 dark:border-amber-800',
    count: 1,
  },
  {
    name: 'Exception Handling',
    description: 'Real-time ATM simulation with try-throw-catch runtime recovery',
    iconName: 'ShieldAlert',
    badgeClass: 'text-rose-600 bg-rose-50 border-rose-200 dark:bg-rose-900/30 dark:border-rose-800',
    count: 2,
  },
];

export function getPracticalById(id: number): Practical | undefined {
  return allPracticals.find(p => p.id === id);
}
