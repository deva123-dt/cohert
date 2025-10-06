
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Card from '../../components/ui/Card';
import CourseCard from '../../components/ui/CourseCard';
import { mockCourses, mockAssignments } from '../../data/mockData';
import { Assignment } from '../../types';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const continuingCourses = mockCourses.filter(c => c.progress > 0 && c.progress < 100);
  const upcomingAssignments = mockAssignments.filter(a => a.status === 'Pending').slice(0, 3);

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
        Welcome back, {user?.name}!
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">Here's what's happening today.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">Courses in Progress</h3>
          <p className="text-3xl font-bold text-slate-800 dark:text-white">{continuingCourses.length}</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">Courses Completed</h3>
          <p className="text-3xl font-bold text-slate-800 dark:text-white">{mockCourses.filter(c => c.progress === 100).length}</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">Assignments Due</h3>
          <p className="text-3xl font-bold text-slate-800 dark:text-white">{upcomingAssignments.length}</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">Overall Grade</h3>
          <p className="text-3xl font-bold text-green-500">A-</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Continue Learning</h2>
          <div className="space-y-6">
            {continuingCourses.length > 0 ? (
              continuingCourses.map(course => <CourseCard key={course.id} course={course} />)
            ) : (
              <Card>
                <p className="text-slate-600 dark:text-slate-400">You haven't started any courses yet. Go to the courses page to enroll!</p>
              </Card>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Upcoming Assignments</h2>
          <Card>
            <ul className="space-y-4">
              {upcomingAssignments.map((assignment: Assignment) => (
                <li key={assignment.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white">{assignment.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{assignment.course}</p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{assignment.dueDate}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
