import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen w-screen items-center justify-center bg-background">
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
