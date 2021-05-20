import React from 'react';
import ThemeSelector from '../components/ThemeSelector';
import Navbar from '../components/Navbar';
import { GlobalStyles } from '../global';
import { ThemeProvider } from 'styled-components';

const UserProfilePage = (props) => {
    return (
        <>
            <ThemeProvider theme={props.theme} >
                <GlobalStyles />
                <Navbar />
                <p>Logged in as SINGHM11</p>
                <ThemeSelector theme={props.theme} themeChanger={props.themeChanger}/>  
        </ThemeProvider>
        </>
    )
};

export default UserProfilePage;