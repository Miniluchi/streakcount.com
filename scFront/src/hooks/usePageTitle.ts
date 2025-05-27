import { useEffect } from "react";

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `StreakCount - ${title}`;

    // Nettoyer le titre quand le composant se démonte
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
