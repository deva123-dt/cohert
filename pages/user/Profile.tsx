
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">My Profile</h1>
      <Card>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
                <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="h-32 w-32 rounded-full object-cover shadow-lg"
                />
            </div>
            <div className="flex-grow w-full">
                <form className="space-y-4">
                    <Input id="name" label="Full Name" type="text" defaultValue={user.name} />
                    <Input id="email" label="Email Address" type="email" defaultValue={user.email} />
                    <Input id="password" label="New Password" type="password" placeholder="Leave blank to keep current password" />
                    <div>
                        <Button type="submit">Save Changes</Button>
                    </div>
                </form>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
