import React, { useEffect, useState } from 'react';
import toggle from '../../assets/images/hamberger.svg';
import moon from '../../assets/images/moon.svg';
import sun from '../../assets/images/sun.svg';
import deice from '../../assets/images/device.svg';

function Header({ toggleSidebar }) {
    const [dropdown, setDropdown] = useState(false);
    const [theme, setTheme] = useState('themeLight');
    const [icon, setIcon] = useState('');

    const showDropdown = function (){
        setDropdown(!dropdown)
    }
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(storedTheme || (prefersDarkMode ? 'themeDark' : 'themeLight'));
        setIcon(prefersDarkMode ? 'darkIcon' : 'lightIcon');
    }, []);

    const setDefaultTheme = function () {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const newTheme = prefersDarkMode ? 'themeDark' : 'themeLight';
        setTheme(newTheme);
        setIcon('defaultIcon');
        localStorage.setItem('theme', newTheme);
    };

    const setLightTheme = function () {
        setTheme('themeLight');
        setIcon('lightIcon');
        localStorage.setItem('theme', 'themeLight');
    };

    const setDarkTheme = function () {
        setTheme('themeDark');
        setIcon('darkIcon');
        localStorage.setItem('theme', 'themeDark');
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <header>
            <div className="headerText">
                <button className="navToggler" onClick={toggleSidebar}>
                    <img src={toggle} alt="toggler" />
                </button>
                Dashboard
            </div>
            <div className={'styleSwitcher'}>
                <button onClick={showDropdown}>
                    {icon === 'defaultIcon' && <img src={deice} style={{ width: 16, height: 16 }} alt="Default" />}
                    {icon === 'lightIcon' && <img src={sun} style={{ width: 16, height: 16 }} alt="Light" />}
                    {icon === 'darkIcon' && <img src={moon} style={{ width: 16, height: 16 }} alt="Dark" />} Theme
                </button>
                {
                    dropdown &&
                    <div className={'dropdown'}>
                    <button onClick={setDefaultTheme}>
                        <img src={deice} style={{ width: 16, height: 16 }} alt="Default" /> OS Default
                    </button>
                    <button onClick={setLightTheme}>
                        <img src={sun} style={{ width: 16, height: 16 }} alt="Light" /> Light
                    </button>
                    <button onClick={setDarkTheme}>
                        <img src={moon} style={{ width: 16, height: 16 }} alt="Dark" /> Dark
                    </button>
                </div>
                }

            </div>
        </header>
    );
}
export default Header;
