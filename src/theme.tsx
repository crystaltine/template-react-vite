import React from "react";

type SiteTheme = 'light' | 'dark';

export interface ThemeContextProps {
  theme: SiteTheme;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<SiteTheme>('light');
  React.useEffect(() => {
    const localTheme = localStorage.getItem('crystaltine-site-theme') as SiteTheme;
    if (localTheme) {
      setTheme(localTheme);
      document.body.classList.add(`theme-${localTheme}`);
    } else {
      localStorage.setItem('crystaltine-site-theme', 'light');
      document.body.classList.add(`theme-light`);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev: SiteTheme) => (prev === 'light'? 'dark' : 'light'));
    const newTheme = theme === 'light'? 'dark' : 'light';
    document.body.classList.remove(`theme-${theme}`);
    document.body.classList.add(`theme-${newTheme}`);
    localStorage.setItem('crystaltine-site-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
