
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { UserRole } from '../../types';
import { HomeIcon, BookOpenIcon, ClipboardListIcon, UserIcon, ShieldCheckIcon, UsersIcon, ChartBarIcon, XIcon } from '../../lib/icons';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const NavItem: React.FC<{ to: string, icon: React.ReactNode, children: React.ReactNode }> = ({ to, icon, children }) => {
    const activeClass = 'bg-indigo-800 text-white';
    const inactiveClass = 'text-indigo-100 hover:bg-indigo-600 hover:text-white';
    return (
        <NavLink
            to={to}
            end
            className={({ isActive }) => `${isActive ? activeClass : inactiveClass} group flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors`}
        >
            {icon}
            {children}
        </NavLink>
    );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { user } = useAuth();
  
  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>
      <aside className={`fixed top-0 left-0 h-full bg-indigo-700 text-white w-64 p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:flex-shrink-0 transition-transform duration-300 ease-in-out z-40 flex flex-col`}>
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center">
            <BookOpenIcon className="h-8 w-8 text-white mr-2" />
            <span className="text-2xl font-bold">Cohert</span>
          </div>
          <button onClick={toggleSidebar} className="md:hidden text-indigo-200 hover:text-white">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-grow">
          <NavItem to="/" icon={<HomeIcon className="h-5 w-5 mr-3" />}>Dashboard</NavItem>
          <NavItem to="/courses" icon={<BookOpenIcon className="h-5 w-5 mr-3" />}>Courses</NavItem>
          <NavItem to="/assignments" icon={<ClipboardListIcon className="h-5 w-5 mr-3" />}>Assignments</NavItem>
          <NavItem to="/profile" icon={<UserIcon className="h-5 w-5 mr-3" />}>Profile</NavItem>
        </nav>
        
        {user?.role === UserRole.ADMIN && (
          <div>
            <h3 className="px-4 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-2">Admin</h3>
            <nav>
              <NavItem to="/admin" icon={<ChartBarIcon className="h-5 w-5 mr-3" />}>Analytics</NavItem>
              <NavItem to="/admin/courses" icon={<ShieldCheckIcon className="h-5 w-5 mr-3" />}>Manage Courses</NavItem>
              <NavItem to="/admin/users" icon={<UsersIcon className="h-5 w-5 mr-3" />}>Manage Users</NavItem>
            </nav>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
