
import { User, Course, Assignment, Notification, UserRole } from '../types';

export const mockUsers: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: UserRole.STUDENT, avatar: 'https://picsum.photos/seed/alice/100/100' },
  { id: '2', name: 'Bob Williams', email: 'bob@example.com', role: UserRole.STUDENT, avatar: 'https://picsum.photos/seed/bob/100/100' },
  { id: '3', name: 'Dr. Carol White', email: 'carol@example.com', role: UserRole.INSTRUCTOR, avatar: 'https://picsum.photos/seed/carol/100/100' },
  { id: '4', name: 'Admin User', email: 'admin@example.com', role: UserRole.ADMIN, avatar: 'https://picsum.photos/seed/admin/100/100' },
];

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React, including components, state, props, and hooks.',
    instructor: 'Dr. Carol White',
    imageUrl: 'https://picsum.photos/seed/react/600/400',
    progress: 75,
    lessons: [
      { id: 'l1', title: 'What is React?', duration: '10 min', content: 'Detailed content about React history...' },
      { id: 'l2', title: 'Components and Props', duration: '25 min', content: 'Detailed content about components...' },
      { id: 'l3', title: 'State and Lifecycle', duration: '30 min', content: 'Detailed content about state...' },
      { id: 'l4', title: 'Handling Events', duration: '20 min', content: 'Detailed content about events...' },
    ]
  },
  {
    id: '2',
    title: 'Advanced Tailwind CSS',
    description: 'Master utility-first CSS with advanced techniques and custom configurations.',
    instructor: 'Dr. Carol White',
    imageUrl: 'https://picsum.photos/seed/tailwind/600/400',
    progress: 40,
    lessons: [
        { id: 'l1', title: 'Utility-First Fundamentals', duration: '15 min', content: '...' },
        { id: 'l2', title: 'Responsive Design', duration: '20 min', content: '...' },
    ]
  },
  {
    id: '3',
    title: 'TypeScript for Beginners',
    description: 'Understand the basics of TypeScript and how it enhances JavaScript development.',
    instructor: 'Dr. Carol White',
    imageUrl: 'https://picsum.photos/seed/ts/600/400',
    progress: 10,
    lessons: [
        { id: 'l1', title: 'Introduction to Types', duration: '18 min', content: '...' },
    ]
  },
];

export const mockAssignments: Assignment[] = [
  { id: 'a1', title: 'React Components Project', course: 'Introduction to React', dueDate: '2024-08-15', status: 'Graded', grade: 'A-' },
  { id: 'a2', title: 'Tailwind CSS Landing Page', course: 'Advanced Tailwind CSS', dueDate: '2024-08-20', status: 'Submitted' },
  { id: 'a3', title: 'TypeScript Setup', course: 'TypeScript for Beginners', dueDate: '2024-08-25', status: 'Pending' },
  { id: 'a4', title: 'State Management Essay', course: 'Introduction to React', dueDate: '2024-08-10', status: 'Late' },
];

export const mockNotifications: Notification[] = [
  { id: 'n1', message: 'Your assignment "React Components Project" has been graded.', timestamp: '2 hours ago', read: false },
  { id: 'n2', message: 'New course "Advanced TypeScript" has been added.', timestamp: '1 day ago', read: false },
  { id: 'n3', message: 'Welcome to Cohert! Complete your profile to get started.', timestamp: '3 days ago', read: true },
];
