import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!acceptTerms) {
      setError("Merci d'accepter les conditions d'utilisation.");
      return;
    }

    if (password.length < 6) {
      setError("Le mot de passe doit faire au moins 6 caractères.");
      return;
    }

    const res = await authService.register({ name, email, password });

    if (res.success) {
      setSuccess("Inscription réussie ! Redirection...");
      setTimeout(() => {
        navigate("/login", { state: { registered: true } });
      }, 2000);
    } else {
      setError(res.message || "Erreur inconnue.");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-700">
      <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
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
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="flex items-start text-sm">
            <input
              id="terms"
              type="checkbox"
              checked={acceptTerms}
              onChange={e => setAcceptTerms(e.target.checked)}
              className="mt-1 mr-2 w-4 h-4 border border-gray-300 rounded"
            />
            <label htmlFor="terms" className="text-gray-700">
              I agree to the&nbsp;
              <a href="#" className="text-purple-700 underline hover:text-purple-900">
                terms & policy
              </a>
              .
            </label>
          </div>
          {error && (
                      <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</div>
                    )}

                    {success && (
                      <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">{success}</div>
                    )}

          <button
            type="submit"
            className="w-full bg-indigo-900 text-white py-2 px-4 rounded-md hover:bg-indigo-800 transition"
          >
            Signup
          </button>
<p className="text-sm text-center mt-4 text-gray-600">
  Already have an account?{" "}
  <a href="/login" className="text-purple-700 font-medium underline hover:text-purple-900">
    Login
  </a>
</p>

        </form>
      </div>
    </div>
  );
};

export default Register;
