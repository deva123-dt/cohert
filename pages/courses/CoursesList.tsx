
import React from 'react';
import CourseCard from '../../components/ui/CourseCard';
import { mockCourses } from '../../data/mockData';

const CoursesList: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
