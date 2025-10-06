
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { mockCourses } from '../../data/mockData';
import { Lesson } from '../../types';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = mockCourses.find(c => c.id === id);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(course?.lessons[0] || null);

  if (!course) {
    return (
      <Card>
        <h1 className="text-2xl font-bold text-red-500">Course not found</h1>
        <p className="text-slate-600 dark:text-slate-400">The course you are looking for does not exist.</p>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{selectedLesson?.title || course.title}</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-4">By {course.instructor}</p>
            <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <p className="text-white">Video player would be here</p>
            </div>
            <p className="text-slate-700 dark:text-slate-300">
                {selectedLesson?.content || course.description}
            </p>
        </Card>
      </div>
      <div>
        <Card>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Course Lessons</h2>
          <ul className="space-y-2">
            {course.lessons.map((lesson, index) => (
              <li key={lesson.id}>
                <button 
                  onClick={() => setSelectedLesson(lesson)}
                  className={`w-full text-left p-3 rounded-md transition-colors ${selectedLesson?.id === lesson.id ? 'bg-indigo-100 dark:bg-indigo-900' : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                >
                  <p className={`font-semibold ${selectedLesson?.id === lesson.id ? 'text-indigo-700 dark:text-indigo-200' : 'text-slate-800 dark:text-slate-200'}`}>
                    {index + 1}. {lesson.title}
                  </p>
                  <p className={`text-sm ${selectedLesson?.id === lesson.id ? 'text-indigo-500 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`}>
                    {lesson.duration}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetail;
