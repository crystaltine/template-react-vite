import React from 'react';
import '../styles/menubar/menubar.css'
import lightThemeIcon from '../assets/theme-light.svg';
import darkThemeIcon from '../assets/theme-dark.svg';
import logoImg from '../assets/logo7_128x_nobg.png';
import { SiteThemeManager } from '../theme';

interface MenubarProps {
  selected?: string;
}

const Menubar = (props: MenubarProps) => {

  // allows theme toggle button to change icons
  const [_currTheme, setCurrTheme] = React.useState(SiteThemeManager.currTheme);
  const _toggleTheme = React.useCallback(() => {
    SiteThemeManager.toggleTheme();
    setCurrTheme(SiteThemeManager.currTheme);
  }, []);

  return (
    <div className='menubar-main'>

      <div className='menubar-title-container'>
        <img className='menubar-logo-img' src={logoImg} alt="logo" />
        <span className='menubar-title-text'>Menubar | Current Page: {props.selected}</span>
      </div>
      
      <div className='menubar-theme-container' onClick={_toggleTheme}>
        <img src={_currTheme === 'light'? darkThemeIcon : lightThemeIcon} alt="toggle theme" className='menubar-theme-icon' />
      </div>

    </div>
  );
};

export default Menubar;