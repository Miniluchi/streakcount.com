import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <div className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Bienvenue sur StrikeCount
          </h1>
          <p className="text-xl text-muted-foreground">
            Votre application personnelle pour suivre et analyser vos
            expériences intimes
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">
              Suivez vos expériences
            </h2>
            <p className="text-muted-foreground mb-6">
              StrikeCount vous permet d'enregistrer et d'analyser vos relations
              intimes avec des données comme la durée, la qualité et les
              informations sur vos partenaires.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Enregistrez la date, l'heure et la durée</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Évaluez la qualité de chaque rencontre</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Ajoutez des commentaires et des notes</span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">
              Analysez vos statistiques
            </h2>
            <p className="text-muted-foreground mb-6">
              Visualisez vos données sous forme de graphiques et de tableaux
              pour mieux comprendre vos habitudes et préférences.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Tendances temporelles de fréquence et satisfaction</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Comparaisons entre différents partenaires</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Analyses de corrélations entre diverses variables</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link to="/login">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Se connecter
            </Button>
          </Link>
          <Link to="/register">
            <Button size="lg" variant="default" className="w-full sm:w-auto">
              Créer un compte
            </Button>
          </Link>
        </div>

        <div className="text-center text-muted-foreground">
          <p>
            StrikeCount est une application personnelle et privée qui protège
            vos données sensibles. Vos statistiques ne sont jamais partagées.
          </p>
        </div>
      </div>
    </div>
  );
}
