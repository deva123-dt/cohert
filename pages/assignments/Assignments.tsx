
import React from 'react';
import Card from '../../components/ui/Card';
import { mockAssignments } from '../../data/mockData';
import { Assignment } from '../../types';

const getStatusColor = (status: Assignment['status']) => {
  switch (status) {
    case 'Graded': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'Submitted': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'Late': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    default: return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
  }
};

const Assignments: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Assignments</h1>
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Course</th>
                <th scope="col" className="px-6 py-3">Due Date</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Grade</th>
              </tr>
            </thead>
            <tbody>
              {mockAssignments.map((assignment) => (
                <tr key={assignment.id} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600">
                  <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white">
                    {assignment.title}
                  </th>
                  <td className="px-6 py-4">{assignment.course}</td>
                  <td className="px-6 py-4">{assignment.dueDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(assignment.status)}`}>
                      {assignment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{assignment.grade || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Assignments;
