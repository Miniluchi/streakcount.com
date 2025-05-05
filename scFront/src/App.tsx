import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Home } from "./pages/home/Home";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background flex flex-col w-full">
          {/* Barre de navigation */}
          <nav className="w-full border-b">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
              <div className="flex items-center gap-2">
                <Link to="/">
                  <h1 className="text-2xl font-bold">StreakCount</h1>
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Connexion
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="default" size="sm">
                    Inscription
                  </Button>
                </Link>
                <ModeToggle />
              </div>
            </div>
          </nav>

          {/* Contenu principal */}
          <main className="w-full flex-1">
            <div className="container mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </main>

          {/* Pied de page */}
          <footer className="w-full border-t">
            <div className="container mx-auto py-6 text-center text-sm text-muted-foreground">
              <p>© 2024 StreakCount. Tous droits réservés.</p>
            </div>
          </footer>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
