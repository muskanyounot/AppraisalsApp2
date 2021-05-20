import React from 'react';
import styles from './FirstPage.module.scss';
import { GlobalStyles } from '../../global';
import { ThemeProvider } from 'styled-components';

export const FirstPage = (props) => {
    return (
        <>
            <ThemeProvider theme={props.theme} >
            <GlobalStyles />
            <div>
                <header>
                    <p>New Appraisal Form</p>
                </header>
                <div className={styles.employeeInfo}>
                    <label>Appraiser Name:</label>
                    <input type={Text} placeholder="Please Enter Full Name"></input>
                </div>
                <div className={styles.employeeInfo}>
                    <label>Appraisee Name:</label>
                    <input type={Text} placeholder="Please Enter Full Name"></input>
                </div>
                <div className={styles.employeeInfo}>
                    <label>Appraisee Job Title:</label>
                    <input type={Text}></input>
                </div>
            </div>
            </ThemeProvider>
        </>
    )
}
export default FirstPage;