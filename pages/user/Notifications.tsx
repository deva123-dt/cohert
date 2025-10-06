
import React from 'react';
import Card from '../../components/ui/Card';
import { mockNotifications } from '../../data/mockData';
import { BellIcon } from '../../lib/icons';

const Notifications: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Notifications</h1>
      <Card>
        <ul className="divide-y divide-slate-200 dark:divide-slate-700">
          {mockNotifications.map(notification => (
            <li key={notification.id} className="py-4 flex items-start space-x-4">
              <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${notification.read ? 'bg-slate-200 dark:bg-slate-600' : 'bg-indigo-100 dark:bg-indigo-900'}`}>
                <BellIcon className={`h-6 w-6 ${notification.read ? 'text-slate-500' : 'text-indigo-600 dark:text-indigo-300'}`} />
              </div>
              <div>
                <p className={`text-sm ${notification.read ? 'text-slate-600 dark:text-slate-400' : 'font-semibold text-slate-800 dark:text-white'}`}>
                  {notification.message}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                  {notification.timestamp}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Notifications;
