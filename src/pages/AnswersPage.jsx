import React from 'react';
import Navbar from '../components/Navbar';
import GeneratedForm from '../components/GeneratedForm';


const AnswersPage = (props) => {
    return (
        <>
        <Navbar />
        <GeneratedForm customerQs={props.customerQs} performanceQs={props.performanceQs} attitudeQs={props.attitudeQs} engagementQs={props.engagementQs}/>
        </>
    );
};
export default AnswersPage;