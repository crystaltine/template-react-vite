type SiteTheme = 'light' | 'dark';
export let currTheme: SiteTheme = 'light';
document.body.classList.add(`theme-${currTheme}`);

export function toggleTheme() {
  document.body.classList.remove(`theme-${currTheme}`);
	currTheme = currTheme === 'light'? 'dark' : 'light';
  document.body.classList.add(`theme-${currTheme}`);
}