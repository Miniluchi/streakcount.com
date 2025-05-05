import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background p-8">
        {/* Barre de navigation */}
        <nav className="container flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">StrikeCount</h1>
          <ModeToggle />
        </nav>

        {/* Contenu principal */}
        <main className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Carte de bienvenue */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle className="text-3xl">
                  Bienvenue sur StrikeCount
                </CardTitle>
                <CardDescription>
                  Une application moderne pour suivre vos activités et objectifs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  StrikeCount vous aide à rester motivé en suivant vos habitudes
                  quotidiennes et en visualisant votre progression au fil du
                  temps.
                </p>
                <div className="flex gap-4">
                  <Button size="lg">Commencer</Button>
                  <Button variant="outline" size="lg">
                    En savoir plus
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Formulaire d'inscription */}
            <Card>
              <CardHeader>
                <CardTitle>Créer un compte</CardTitle>
                <CardDescription>
                  Commencez à utiliser StrikeCount dès aujourd'hui
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom
                    </label>
                    <Input id="name" placeholder="Entrez votre nom" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Entrez votre email"
                    />
                  </div>
                  <Button className="w-full">S'inscrire</Button>
                </form>
              </CardContent>
            </Card>

            {/* Carte de fonctionnalités */}
            <Card>
              <CardHeader>
                <CardTitle>Fonctionnalités</CardTitle>
                <CardDescription>
                  Découvrez ce que StrikeCount peut faire pour vous
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Suivi des habitudes quotidiennes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Statistiques et visualisations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Notifications personnalisées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Synchronisation multi-appareils</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Explorer les fonctionnalités
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>

        {/* Pied de page */}
        <footer className="container mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© 2024 StrikeCount. Tous droits réservés.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
