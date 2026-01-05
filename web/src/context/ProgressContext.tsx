import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface UserProgress {
  totalXP: number;
  unlockedAchievements: string[]; // Array of achievement IDs
  streak: number;
}

interface ProgressContextType {
  progress: UserProgress | null;
  isLoaded: boolean;
  setProgressFromParam: (encoded: string) => void;
}

const ProgressContext = createContext<ProgressContextType>({
  progress: null,
  isLoaded: false,
  setProgressFromParam: () => {}
});

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Decode progress from URL parameter
  const setProgressFromParam = (encoded: string) => {
    try {
      const decoded = atob(encoded);
      const data = JSON.parse(decoded);
      setProgress({
        totalXP: data.xp || 0,
        unlockedAchievements: data.a || [],
        streak: data.s || 0
      });
    } catch {
      setProgress(null);
    }
    setIsLoaded(true);
  };

  // Check URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const progressParam = params.get('p');
    if (progressParam) {
      setProgressFromParam(progressParam);
    } else {
      setIsLoaded(true);
    }
  }, []);

  return (
    <ProgressContext.Provider value={{ progress, isLoaded, setProgressFromParam }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}

// Generate encoded progress string for CLI to use
export function encodeProgress(xp: number, achievements: string[], streak: number): string {
  const data = { xp, a: achievements, s: streak };
  return btoa(JSON.stringify(data));
}
