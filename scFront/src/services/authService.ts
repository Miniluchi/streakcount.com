import type {
  LoginData,
  RegisterData,
  AuthResponse,
  User,
} from "../types/auth";

export interface ApiError {
  message: string;
  status: number;
}

interface ErrorResponse {
  response?: {
    status: number;
    data?: {
      message?: string;
      error?: string;
    };
  };
  request?: unknown;
  message?: string;
}

// Configuration de l'API
const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3001/api";

// Messages d'erreur personnalisés en français
const ERROR_MESSAGES: Record<string, string> = {
  // Erreurs réseau
  "Network Error": "Erreur de connexion. Vérifiez votre connexion internet.",
  "Failed to fetch": "Impossible de contacter le serveur. Veuillez réessayer.",

  // Erreurs d'authentification
  "Invalid credentials": "Email ou mot de passe incorrect.",
  "User not found": "Aucun compte associé à cet email.",
  "Email already exists": "Un compte existe déjà avec cet email.",
  "Invalid email format": "Format d'email invalide.",
  "Password too short": "Le mot de passe doit contenir au moins 6 caractères.",
  "Missing required fields": "Veuillez remplir tous les champs obligatoires.",

  // Erreurs serveur
  "Internal server error":
    "Erreur interne du serveur. Veuillez réessayer plus tard.",
  "Service unavailable": "Service temporairement indisponible.",

  // Erreurs par défaut
  default: "Une erreur inattendue s'est produite. Veuillez réessayer.",
};

// Fonction utilitaire pour gérer les erreurs
const handleApiError = (error: ErrorResponse): ApiError => {
  let message = ERROR_MESSAGES.default;
  let status = 500;

  if (error.response) {
    // Erreur avec réponse du serveur
    status = error.response.status;
    const serverMessage =
      error.response.data?.message || error.response.data?.error;

    if (serverMessage && ERROR_MESSAGES[serverMessage]) {
      message = ERROR_MESSAGES[serverMessage];
    } else {
      // Messages d'erreur basés sur le code de statut
      switch (status) {
        case 400:
          message = "Données invalides. Vérifiez vos informations.";
          break;
        case 401:
          message = "Email ou mot de passe incorrect.";
          break;
        case 403:
          message = "Accès refusé.";
          break;
        case 404:
          message = "Service non trouvé.";
          break;
        case 409:
          message = "Un compte existe déjà avec cet email.";
          break;
        case 422:
          message =
            "Données invalides. Vérifiez le format de vos informations.";
          break;
        case 429:
          message =
            "Trop de tentatives. Veuillez patienter avant de réessayer.";
          break;
        case 500:
          message = "Erreur interne du serveur. Veuillez réessayer plus tard.";
          break;
        case 503:
          message = "Service temporairement indisponible.";
          break;
        default:
          message = ERROR_MESSAGES.default;
      }
    }
  } else if (error.request) {
    // Erreur réseau
    message = ERROR_MESSAGES["Network Error"];
    status = 0;
  } else if (error.message) {
    // Autres erreurs
    message = ERROR_MESSAGES[error.message] || ERROR_MESSAGES.default;
  }

  return { message, status };
};

// Fonction utilitaire pour faire des requêtes HTTP
const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<unknown> => {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  console.log(`🚀 [API Request] ${options.method || "GET"} ${url}`);
  if (options.body) {
    console.log(`📤 [Request Body]`, JSON.parse(options.body as string));
  }

  try {
    const response = await fetch(url, defaultOptions);
    const data = await response.json();

    console.log(`📥 [API Response] ${response.status} ${response.statusText}`);
    console.log(`📋 [Response Data]`, data);

    if (!response.ok) {
      console.error(`❌ [API Error] ${response.status}:`, data);
      throw {
        response: {
          status: response.status,
          data: data,
        },
      };
    }

    console.log(`✅ [API Success]`, data);
    return data;
  } catch (error) {
    console.error(`💥 [API Exception]`, error);
    throw error;
  }
};

// Service d'authentification
export const authService = {
  // Connexion
  login: async (loginData: LoginData): Promise<AuthResponse> => {
    try {
      if (!loginData.email || !loginData.password) {
        throw new Error("Missing required fields");
      }
  
      if (!loginData.email.includes("@")) {
        throw new Error("Invalid email format");
      }
  
      const response = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify(loginData),
      });
  
      return {
        success: true,
        message: "Connexion réussie !",
        user: (response as any).user,
        token: (response as any).token,
      };
    } catch (error: unknown) {
      const typedError = error as ErrorResponse;
      const apiError = handleApiError(typedError);
      return {
        success: false,
        message: apiError.message,
      };
    }
  },
  

  register: async (registerData: RegisterData): Promise<AuthResponse> => {
    try {
      if (!registerData.name || !registerData.email || !registerData.password) {
        throw new Error("Missing required fields");
      }
  
      if (!registerData.email.includes("@")) {
        throw new Error("Invalid email format");
      }
  
      if (registerData.password.length < 6) {
        throw new Error("Password too short");
      }
  
      const response = await apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify(registerData),
      });
  
      return {
        success: true,
        message: "Inscription réussie ! Vous pouvez maintenant vous connecter.",
        user: (response as any).user,
        token: (response as any).token,
      };
    } catch (error: unknown) {
      const typedError = error as ErrorResponse;
      const apiError = handleApiError(typedError);
      return {
        success: false,
        message: apiError.message,
      };
    }
  },
  

  // Déconnexion
  logout: async (): Promise<AuthResponse> => {
    try {
      // Supprimer le token du localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");

      return {
        success: true,
        message: "Déconnexion réussie.",
      };
    } catch (error) {
      return {
        success: false,
        message: "Erreur lors de la déconnexion.",
      };
    }
  },

  // Vérifier si l'utilisateur est connecté
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem("authToken");
    return !!token;
  },

  // Récupérer le token
  getToken: (): string | null => {
    return localStorage.getItem("authToken");
  },

  // Récupérer les informations utilisateur
  getUser: (): User | null => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },

  // Sauvegarder les données d'authentification
  saveAuthData: (token: string, user: User): void => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));
  },
};
