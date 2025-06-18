// src/pages/auth/Login.tsx
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";



const Login = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setError] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await authService.login({ email, password });

    if (res.success && res.token && res.user) {
      authService.saveAuthData(res.token, res.user);
      navigate("/dashboard", { state: { user: res.user } }); // 🔄 on passe le user à la page dashboard
    } else {
      setError(res.message);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-700">
      <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="flex justify-between items-center">
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <a href="#" className="ml-2 text-sm text-blue-600 hover:underline">forgot password</a>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={remember}
              onChange={e => setRemember(e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm text-gray-600">Remember for 30 days</label>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-900 text-white py-2 px-4 rounded-md hover:bg-indigo-800 transition"
          >
            Login
          </button>
          <p className="text-sm text-center mt-4 text-gray-600">
  Don’t have an account?{" "}
  <a href="/register" className="text-purple-700 font-medium underline hover:text-purple-900">
    Create one
  </a>
</p>

        </form>
      </div>
    </div>
  );
};

export default Login;
