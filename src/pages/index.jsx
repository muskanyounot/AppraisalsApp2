import React from 'react';
import Navbar from '../components/Navbar';
import FirstPage from '../components/FirstPage';
import QuestionBank from '../components/QuestionBank';


const Index = (props) => {

    return (
        <>
        <Navbar theme={props.theme} themeChanger={props.themeChanger}/>
        <FirstPage theme={props.theme} />
        <QuestionBank
            theme={props.theme}
            addCustomerQ={props.addCustomerQ}
            addPerformanceQ={props.addPerformanceQ}
            addAttitudeQ={props.addAttitudeQ}
            addEngagementQ={props.addEngagementQ}/>
        </>
    );
};

export default Index;