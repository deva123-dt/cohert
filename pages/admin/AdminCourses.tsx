
import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { mockCourses } from '../../data/mockData';

const AdminCourses: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Manage Courses</h1>
        <Button>Create New Course</Button>
      </div>
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Instructor</th>
                <th scope="col" className="px-6 py-3">Lessons</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockCourses.map((course) => (
                <tr key={course.id} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600">
                  <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white">
                    {course.title}
                  </th>
                  <td className="px-6 py-4">{course.instructor}</td>
                  <td className="px-6 py-4">{course.lessons.length}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <Button variant="secondary" className="px-2 py-1 text-xs">Edit</Button>
                    <Button variant="danger" className="px-2 py-1 text-xs">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminCourses;
