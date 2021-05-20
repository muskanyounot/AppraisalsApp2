import React from 'react';
import Navbar from '../components/Navbar';
import ClosedAppraisalsHeader from '../components/ClosedAppraisalsHeader';
import CASideMenu from '../components/CASideMenu';
import CATable from '../components/CATable';
import styles from './closedappraisals.module.scss'

const ClosedAppraisals = () => {
    return (
        <>
        <Navbar />
        <ClosedAppraisalsHeader />
        <div className={styles.CAContainer}>
        <CASideMenu />
        <CATable />
        </div>
        </>
    );
};
export default ClosedAppraisals;