import React from 'react';
import Navbar from '../components/Navbar';
import ClosedAppraisalsHeader from '../components/ClosedAppraisalsHeader';
import CASideMenu from '../components/CASideMenu';
import CATable from '../components/CATable';
import styles from './closedappraisals.module.scss';
import { GlobalStyles } from '../global';
import { ThemeProvider } from 'styled-components';

const ClosedAppraisals = (props) => {

    return (
        <>
            <ThemeProvider theme={props.theme}>
                <GlobalStyles />
                <Navbar />
                <ClosedAppraisalsHeader />
                <div className={styles.CAContainer}>
                    <CASideMenu />
                    <CATable />
                </div>
            </ThemeProvider>
        </>
    );
};

export default ClosedAppraisals;