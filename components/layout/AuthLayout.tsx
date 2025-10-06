
import React from 'react';
import { BookOpenIcon } from '../../lib/icons';

const AuthLayout: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <BookOpenIcon className="mx-auto h-12 w-auto text-indigo-600" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
            Welcome to Cohert Learning Portal
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
            {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
