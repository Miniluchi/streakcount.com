import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import { RequireAuth } from "./components/RequireAuth"; 
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
<Routes>
  <Route path="/" element={<Navigate to="/login" replace />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* Routes protégées dans AppLayout */}
  <Route
    path="/dashboard"
    element={
      <RequireAuth>
        <AppLayout>
          <Dashboard />
        </AppLayout>
      </RequireAuth>
    }
  />
  <Route
    path="/calendar"
    element={
      <RequireAuth>
        <AppLayout>
          <div>📅 Page Calendar</div>
        </AppLayout>
      </RequireAuth>
    }
  />
  <Route
    path="/new-lover"
    element={
      <RequireAuth>
        <AppLayout>
          <div>❤️ Page New Lover</div>
        </AppLayout>
      </RequireAuth>
    }
  />
  <Route
    path="/lovedex"
    element={
      <RequireAuth>
        <AppLayout>
          <div>📖 Page Lovedex</div>
        </AppLayout>
      </RequireAuth>
    }
  />

  {/* Fallback */}
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
