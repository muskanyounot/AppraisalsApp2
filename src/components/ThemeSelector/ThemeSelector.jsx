import React, { useState } from 'react';
import { lightTheme, darkTheme, summerTheme, liltTheme,  drPepper } from '../../theme';

const ThemeSelector = (props) => {

    const handleChange = (e) => {

        switch (e.target.value) {
            case "lightTheme":
                props.themeChanger(lightTheme);
                break;
            case "darkTheme":
                props.themeChanger(darkTheme);
                break;
            case "summerTheme":
                props.themeChanger(summerTheme);
                break;
            case "liltTheme":
                props.themeChanger(liltTheme);
                break;
            case "drPepper":
                props.themeChanger(drPepper);
                break;

            }
        }


    return (
        <div>
            <select onChange={handleChange}>
            
                <option value="lightTheme">Standard</option>
                <option value="darkTheme">Dark</option>
                <option value="summerTheme">Summer</option>
                <option value="liltTheme">Lilt</option>
                <option value="drPepper">Dr Pepper</option>
            </select>
        </div>
    )
}


export default ThemeSelector;
