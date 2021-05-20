import React from 'react';
import styles from './GeneratedForm.module.scss';
import QuestionCard from '../QuestionCard';

const GeneratedForm = (props) => {

    const questionLists = props

    const getCardJSX = (question, index, nameStub) => (
        <QuestionCard question={question} radioName={`${nameStub}${index}`}/>
    )

    return (
        <div>
            <div>
                <header className={styles.formHeader}>
                    <div className={styles.formTitle}>
                    <p>Your Form</p>
                    </div>
                    <div className={styles.employeeInfo}>
                    <p>Appraisal for: Cerys Vyner</p>
                    <p>Conducted by: Muskan Singh</p>
                    <p>Appraisee Role: IT Grad</p>
                    </div>
                </header>
            </div>
            <div className={styles.allQuestions}>
                <h3 className={styles.pillar}>Customers</h3>
                {questionLists.customerQs.map(function(question, index){return getCardJSX(question, index, "customers")})}

                <h3 className={styles.pillar}>Performance</h3>
                {questionLists.performanceQs.map(function(question, index){return getCardJSX(question, index, "performance")})}

                <h3 className={styles.pillar}>Attitude</h3>
                {questionLists.attitudeQs.map(function(question, index){return getCardJSX(question, index, "attitude")})}

                <h3 className={styles.pillar}>Engagement</h3>
                {questionLists.engagementQs.map(function(question, index){return getCardJSX(question, index, "engagement")})}              

                <p>Mandatory question sections are marked with *</p>
                <button className={styles.submitFormButton}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default GeneratedForm
