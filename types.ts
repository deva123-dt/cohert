
export enum UserRole {
  STUDENT = 'student',
  INSTRUCTOR = 'instructor',
  ADMIN = 'admin',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string; // e.g., "15 min"
  content: string;
  videoUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  imageUrl: string;
  progress: number; // percentage 0-100
  lessons: Lesson[];
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: 'Submitted' | 'Pending' | 'Late' | 'Graded';
  grade?: string;
}

export interface Notification {
  id: string;
  message: string;
  timestamp: string;
  read: boolean;
}
