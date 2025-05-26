import { useState } from 'react';
import { FormInput } from '../../components/FormInput';
import { SubmitButton } from '../../components/SubmitButton';
import { AuthTabs } from '../../components/AuthTabs';

export const AuthForm = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [form, setForm] = useState({ email: '', password: '', confirm: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending to backend:', activeTab, form);
    // Exemple futur : fetch(`/api/${activeTab}`, { method: 'POST', body: JSON.stringify(form) })
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-400 to-blue-500 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
        <div className="text-white text-5xl font-extrabold mb-10 md:mb-0 md:mr-12 text-center md:text-left">
          StreakCount
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              label="Email address"
            />
            <FormInput
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              label="Password"
            />
            {activeTab === 'register' && (
              <FormInput
                type="password"
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                label="Confirm password"
              />
            )}
            <label className="flex items-center text-sm text-gray-600 mb-4">
            <input
                type="checkbox"
                className="h-4 w-4 appearance-none border border-gray-400 rounded-sm checked:bg-transparent checked:border-gray-800 checked:before:content-['✔'] checked:before:text-xs checked:before:text-gray-700 checked:before:block checked:before:text-center"
              />

              Remember me
            </label>
            <SubmitButton label={activeTab === 'login' ? 'Login' : 'Sign up'} />
          </form>
        </div>
      </div>
    </div>
  );
};
