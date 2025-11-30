import * as React from "react";

type Theme = "dark" | "light" | "gaming";
type AccentColor = "purple" | "cyan" | "rainbow";

interface ThemeContextType {
  theme: Theme;
  accentColor: AccentColor;
  setTheme: (theme: Theme) => void;
  setAccentColor: (color: AccentColor) => void;
  glowEnabled: boolean;
  toggleGlow: () => void;
  animationsEnabled: boolean;
  toggleAnimations: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    const stored = localStorage.getItem("theme");
    return (stored as Theme) || "dark";
  });

  const [accentColor, setAccentColorState] = React.useState<AccentColor>(() => {
    const stored = localStorage.getItem("accentColor");
    return (stored as AccentColor) || "purple";
  });

  const [glowEnabled, setGlowEnabled] = React.useState(() => {
    const stored = localStorage.getItem("glowEnabled");
    return stored !== "false";
  });

  const [animationsEnabled, setAnimationsEnabled] = React.useState(() => {
    const stored = localStorage.getItem("animationsEnabled");
    return stored !== "false";
  });

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }, []);

  const setAccentColor = React.useCallback((color: AccentColor) => {
    setAccentColorState(color);
    localStorage.setItem("accentColor", color);
    document.documentElement.setAttribute("data-accent", color);
  }, []);

  const toggleGlow = React.useCallback(() => {
    setGlowEnabled((prev) => {
      const newValue = !prev;
      localStorage.setItem("glowEnabled", String(newValue));
      return newValue;
    });
  }, []);

  const toggleAnimations = React.useCallback(() => {
    setAnimationsEnabled((prev) => {
      const newValue = !prev;
      localStorage.setItem("animationsEnabled", String(newValue));
      if (!newValue) {
        document.documentElement.style.setProperty("--animation-duration", "0s");
      } else {
        document.documentElement.style.removeProperty("--animation-duration");
      }
      return newValue;
    });
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-accent", accentColor);
  }, [theme, accentColor]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        accentColor,
        setTheme,
        setAccentColor,
        glowEnabled,
        toggleGlow,
        animationsEnabled,
        toggleAnimations,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
