
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../../components/ui/Card';

const engagementData = [
  { name: 'Jan', activeUsers: 4000, courseCompletions: 2400 },
  { name: 'Feb', activeUsers: 3000, courseCompletions: 1398 },
  { name: 'Mar', activeUsers: 2000, courseCompletions: 9800 },
  { name: 'Apr', activeUsers: 2780, courseCompletions: 3908 },
  { name: 'May', activeUsers: 1890, courseCompletions: 4800 },
  { name: 'Jun', activeUsers: 2390, courseCompletions: 3800 },
  { name: 'Jul', activeUsers: 3490, courseCompletions: 4300 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Admin Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">Total Users</h3>
          <p className="text-3xl font-bold text-slate-800 dark:text-white">1,245</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">Total Courses</h3>
          <p className="text-3xl font-bold text-slate-800 dark:text-white">58</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">Total Enrollments</h3>
          <p className="text-3xl font-bold text-slate-800 dark:text-white">4,890</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">Revenue</h3>
          <p className="text-3xl font-bold text-green-500">$12,345</p>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">User Engagement</h2>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart
              data={engagementData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                  borderColor: 'rgba(71, 85, 105, 1)', 
                  color: '#f1f5f9'
                }}
              />
              <Legend />
              <Bar dataKey="activeUsers" fill="#4f46e5" />
              <Bar dataKey="courseCompletions" fill="#818cf8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;
