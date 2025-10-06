
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AuthLayout title="Reset your password">
      {submitted ? (
         <div className="text-center">
            <p className="text-slate-700 dark:text-slate-300">
                If an account with that email exists, we've sent instructions to reset your password.
            </p>
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 block mt-4">
              Return to Sign in
            </Link>
         </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Enter your email address and we will send you a link to reset your password.</p>
            <Input
            id="email"
            label="Email address"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <div>
            <Button type="submit" className="w-full">
                Send Reset Link
            </Button>
            </div>
        </form>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
