// scFront/src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import { AuthForm } from './pages/auth/AuthForm';


function App() {
  return <AuthForm />;
}

export default App
