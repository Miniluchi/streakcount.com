import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
        <h1 className="text-3xl font-bold">Test Mode Sombre</h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="default">Bouton Test</Button>
          <Button variant="secondary">Bouton Secondaire</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
