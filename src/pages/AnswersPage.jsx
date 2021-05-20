import React from 'react';
import Navbar from '../components/Navbar';
import GeneratedForm from '../components/GeneratedForm';
import { GlobalStyles } from '../global';
import { ThemeProvider } from 'styled-components';


const AnswersPage = (props) => {
    return (
        <>
            <ThemeProvider theme={props.theme} >
                <GlobalStyles />
                <Navbar />
                <GeneratedForm />
            </ThemeProvider>
        </>
    );
};

export default AnswersPage;