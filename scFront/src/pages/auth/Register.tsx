import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function Register() {
  return (
    <div className="w-full flex justify-center items-center py-12">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-center mb-2">
            Inscription
          </CardTitle>
          <CardDescription className="text-center">
            Créez un compte pour commencer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nom
              </label>
              <Input id="name" type="text" placeholder="Votre nom" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="exemple@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Mot de passe
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="pt-2 flex items-center space-x-2">
              <Checkbox id="newsletter" />
              <label
                htmlFor="newsletter"
                className="text-sm font-medium leading-none"
              >
                Je souhaite recevoir la newsletter
              </label>
            </div>
            <Button type="submit" className="w-full">
              S'inscrire
            </Button>
          </form>

          <div className="text-center mt-6">
            <span className="text-sm text-muted-foreground">
              Vous avez déjà un compte ?{" "}
            </span>
            <Link to="/login">
              <Button variant="link" className="text-sm p-0">
                Connectez-vous
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
