import React from 'react';
import { defaultTheme, darkTheme, calmTheme, warmTheme,  hiContrastTheme } from '../../theme';

const ThemeSelector = (props) => {
const option = props.theme;
    const handleChange = (e) => {

        switch (e.target.value) {
            case "defaultTheme":
                props.themeChanger(defaultTheme);
                break;
            case "darkTheme":
                props.themeChanger(darkTheme);
                break;
            case "calmTheme":
                props.themeChanger(calmTheme);
                break;
            case "warmTheme":
                props.themeChanger(warmTheme);
                break;
            case "hiContrastTheme":
                props.themeChanger(hiContrastTheme);
                break;
            }
        }

    return (
        <div>
            <select value={option} onChange={handleChange}>
                <option value="defaultTheme">Default</option>
                <option value="darkTheme">Dark Mode</option>
                <option value="calmTheme">Calm</option>
                <option value="warmTheme">Warm</option>
                <option value="hiContrastTheme">High Contrast</option>
            </select>
        </div>
    )
}

export default ThemeSelector;
