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

export function Login() {
  return (
    <div className="w-full flex justify-center items-center py-12">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-center mb-2">
            Connexion
          </CardTitle>
          <CardDescription className="text-center">
            Connectez-vous pour accéder à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Mot de passe
                </label>
                <Button variant="link" className="text-xs p-0 h-auto">
                  Mot de passe oublié ?
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </form>

          <div className="text-center mt-6">
            <span className="text-sm text-muted-foreground">
              Vous n'avez pas de compte ?{" "}
            </span>
            <Link to="/register">
              <Button variant="link" className="text-sm p-0">
                Inscrivez-vous
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
