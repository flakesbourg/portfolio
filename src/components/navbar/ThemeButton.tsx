import { useContext } from "react";
import { ThemeContext } from "../../App";
import darkTheme from '../../themes/darkTheme';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

function ThemeButton() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className={theme === darkTheme ? "themeSwitch dark" : "themeSwitch"} onClick={() => toggleTheme()}>
            <MdLightMode className={theme === darkTheme ? "themeIcon" : "themeIcon active"} />
            <MdDarkMode className={theme === darkTheme ? "themeIcon active" : "themeIcon"} />
            <div className='themeIndicator'/>
        </div>
    );
}

export default ThemeButton;