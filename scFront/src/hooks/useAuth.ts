import { useState } from "react";
import { authService } from "../services/authService";
import type { LoginData, RegisterData, AuthResponse } from "../types/auth";

export interface UseAuthReturn {
  isLoading: boolean;
  error: string | null;
  login: (data: LoginData) => Promise<AuthResponse>;
  register: (data: RegisterData) => Promise<AuthResponse>;
  logout: () => Promise<AuthResponse>;
  clearError: () => void;
}

export const useAuth = (): UseAuthReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => {
    setError(null);
  };

  const login = async (data: LoginData): Promise<AuthResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.login(data);

      if (response.success && response.token && response.user) {
        // Sauvegarder les données d'authentification
        authService.saveAuthData(response.token, response.user);
      } else {
        setError(response.message);
      }

      return response;
    } catch {
      const errorMessage =
        "Une erreur inattendue s'est produite lors de la connexion.";
      setError(errorMessage);
      return {
        success: false,
        message: errorMessage,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData): Promise<AuthResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.register(data);

      if (!response.success) {
        setError(response.message);
      }

      return response;
    } catch {
      const errorMessage =
        "Une erreur inattendue s'est produite lors de l'inscription.";
      setError(errorMessage);
      return {
        success: false,
        message: errorMessage,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<AuthResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.logout();
      return response;
    } catch {
      const errorMessage = "Une erreur s'est produite lors de la déconnexion.";
      setError(errorMessage);
      return {
        success: false,
        message: errorMessage,
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    login,
    register,
    logout,
    clearError,
  };
};
