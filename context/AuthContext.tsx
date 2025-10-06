
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { User, UserRole } from '../types';
import { mockUsers } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const checkAuth = useCallback(() => {
    try {
      const storedUser = localStorage.getItem('cohert_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Failed to parse user from localStorage', error);
      localStorage.removeItem('cohert_user');
    }
  }, []);
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = (email: string) => {
    // This is a mock login. In a real app, you would validate credentials.
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      localStorage.setItem('cohert_user', JSON.stringify(foundUser));
      setUser(foundUser);
    } else {
      // Simulate login for a new student user
      const newUser: User = { 
        id: String(Date.now()), 
        name: 'New Student', 
        email, 
        role: UserRole.STUDENT, 
        avatar: 'https://picsum.photos/seed/newuser/100/100'
      };
      localStorage.setItem('cohert_user', JSON.stringify(newUser));
      setUser(newUser);
    }
  };

  const logout = () => {
    localStorage.removeItem('cohert_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
