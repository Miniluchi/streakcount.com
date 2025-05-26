# Hook useAuth.ts - Guide complet

## 🎯 **Qu'est-ce que useAuth ?**

Le hook `useAuth` est un **hook personnalisé React** qui encapsule toute la logique d'authentification de votre application. Il agit comme une **couche d'abstraction** entre vos composants React et le service d'authentification.

## 🔧 **Pourquoi utiliser un hook personnalisé ?**

### ❌ **Sans useAuth (approche directe)**

```tsx
// Dans chaque composant, vous devriez faire :
import { useState } from "react";
import { authService } from "../services/authService";

function LoginComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.login(data);
      if (!response.success) {
        setError(response.message);
      }
      // Gérer le succès...
    } catch (err) {
      setError("Erreur inattendue");
    } finally {
      setIsLoading(false);
    }
  };

  // Répéter cette logique dans chaque composant...
}
```

### ✅ **Avec useAuth (approche propre)**

```tsx
// Dans n'importe quel composant :
import { useAuth } from "../hooks/useAuth";

function LoginComponent() {
  const { login, isLoading, error, clearError } = useAuth();

  const handleLogin = async (data) => {
    const response = await login(data);
    if (response.success) {
      // Gérer le succès
    }
    // L'état de chargement et les erreurs sont gérés automatiquement !
  };
}
```

## 🏗️ **Architecture et avantages**

### 1. **Séparation des responsabilités**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Composants    │───▶│   useAuth Hook  │───▶│  authService    │
│   (UI Logic)    │    │  (State Logic)  │    │ (API Calls)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

- **Composants** : Se concentrent sur l'affichage et l'interaction utilisateur
- **useAuth** : Gère l'état (loading, erreurs) et la logique de l'authentification
- **authService** : S'occupe uniquement des appels API

### 2. **Gestion centralisée de l'état**

```tsx
export const useAuth = (): UseAuthReturn => {
  const [isLoading, setIsLoading] = useState(false); // État de chargement
  const [error, setError] = useState<string | null>(null); // Gestion des erreurs

  // Toute la logique d'état est centralisée ici !
};
```

### 3. **Interface cohérente**

```tsx
// Même interface dans tous les composants
const { login, register, logout, isLoading, error, clearError } = useAuth();
```

## 🎨 **Fonctionnalités du hook useAuth**

### **États gérés automatiquement :**

- `isLoading` : Indique si une opération est en cours
- `error` : Contient le message d'erreur actuel (ou null)

### **Méthodes disponibles :**

- `login(data)` : Connexion utilisateur
- `register(data)` : Inscription utilisateur
- `logout()` : Déconnexion
- `clearError()` : Effacer les messages d'erreur

### **Gestion automatique :**

- ✅ Activation/désactivation du loading
- ✅ Gestion des erreurs avec messages en français
- ✅ Sauvegarde automatique des tokens
- ✅ Nettoyage des erreurs

## 🔄 **Cycle de vie d'une authentification**

```mermaid
graph TD
    A[Utilisateur clique sur "Se connecter"] --> B[useAuth.login() appelé]
    B --> C[isLoading = true]
    C --> D[authService.login() appelé]
    D --> E{Succès ?}
    E -->|Oui| F[Sauvegarder token + user]
    E -->|Non| G[error = message d'erreur]
    F --> H[isLoading = false]
    G --> H
    H --> I[Composant se re-rend avec nouvel état]
```

## 💡 **Exemples d'utilisation**

### **Dans Login.tsx :**

```tsx
export function Login() {
  const { login, isLoading, error, clearError } = useAuth();

  const handleSubmit = async (formData) => {
    const response = await login(formData);
    if (response.success) {
      navigate("/dashboard");
    }
    // Pas besoin de gérer isLoading ou error manuellement !
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert variant="destructive">{error}</Alert>}
      <Button disabled={isLoading}>
        {isLoading ? "Connexion..." : "Se connecter"}
      </Button>
    </form>
  );
}
```

### **Dans Register.tsx :**

```tsx
export function Register() {
  const { register, isLoading, error } = useAuth();

  // Même interface, même simplicité !
  const handleSubmit = async (formData) => {
    const response = await register(formData);
    if (response.success) {
      navigate("/login");
    }
  };
}
```

## 🚀 **Avantages clés**

### 1. **Réutilisabilité**

- Un seul hook pour toute l'authentification
- Même logique dans tous les composants

### 2. **Maintenabilité**

- Modifications centralisées dans le hook
- Pas de duplication de code

### 3. **Testabilité**

- Hook isolé, facile à tester
- Mocking simplifié

### 4. **Expérience développeur**

- Interface simple et intuitive
- Auto-complétion TypeScript
- Gestion d'erreur automatique

### 5. **Performance**

- État optimisé avec React hooks
- Re-renders minimaux

## 🔍 **Comparaison avec d'autres approches**

| Approche               | Avantages           | Inconvénients                          |
| ---------------------- | ------------------- | -------------------------------------- |
| **Direct authService** | Simple pour débuter | Code dupliqué, gestion d'état manuelle |
| **Context API**        | État global         | Complexité, re-renders inutiles        |
| **Redux/Zustand**      | Puissant            | Overkill pour l'auth simple            |
| **useAuth Hook** ✅    | Équilibre parfait   | Aucun pour ce cas d'usage              |

## 🎯 **En résumé**

Le hook `useAuth` est la **solution idéale** pour gérer l'authentification car il :

1. **Simplifie** l'utilisation dans les composants
2. **Centralise** la logique d'état
3. **Standardise** l'interface d'authentification
4. **Optimise** les performances
5. **Facilite** la maintenance

C'est un pattern très courant et recommandé dans les applications React modernes ! 🚀
