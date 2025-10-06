
import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{course.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">By {course.instructor}</p>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-4">
          <div
            className="bg-indigo-600 h-2.5 rounded-full"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{course.progress}% complete</p>
        <Link
          to={`/courses/${course.id}`}
          className="w-full text-center block bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
