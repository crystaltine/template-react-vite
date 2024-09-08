/* Theme handling stuff. Wrapped in class so it
doesnt reset every time the page changes */

type SiteTheme = 'light' | 'dark';
export class SiteThemeManager {
  public static currTheme: SiteTheme;

  static {

    const storedTheme = localStorage.getItem('crystaltine-site-theme');
    if (storedTheme) {
      SiteThemeManager.currTheme = storedTheme as SiteTheme;
    } else {
      SiteThemeManager.currTheme = 'light';
      localStorage.setItem('crystaltine-site-theme', 'light');
    }

    document.body.classList.add(`theme-${SiteThemeManager.currTheme}`);
  }

  public static toggleTheme() {
    document.body.classList.remove(`theme-${SiteThemeManager.currTheme}`);
    SiteThemeManager.currTheme = SiteThemeManager.currTheme === 'light'? 'dark' : 'light';
    document.body.classList.add(`theme-${SiteThemeManager.currTheme}`);
    localStorage.setItem('crystaltine-site-theme', SiteThemeManager.currTheme);
  }
}