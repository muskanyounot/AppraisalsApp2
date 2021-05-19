import React from 'react';
import Navbar from '../components/Navbar';
import ClosedAppraisalsHeader from '../components/ClosedAppraisalsHeader';
import CASideMenu from '../components/CASideMenu';
import CATable from '../components/CATable';

const ClosedAppraisals = () => {
    return (
        <>
        <Navbar />
        <ClosedAppraisalsHeader />
        <CASideMenu />
        <CATable />
        </>
    );
};
export default ClosedAppraisals;