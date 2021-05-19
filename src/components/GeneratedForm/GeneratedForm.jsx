import React from 'react';
import styles from './GeneratedForm.module.scss';

const GeneratedForm = () => {
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
                <div className={styles.questionBox}>
                    <p className={styles.question}>Does Cerys communicate well with customers?</p>
                    <input type="radio" id="1.1" value="1.1"/>
                    <label for="1.1">Consistently meets expectations and regularly exceeds what is asked of them</label>
                    <input type="radio" id="1.2" value="1.2"/>
                    <label for="1.2">Meets expectations the majority of the time</label>
                    <input type="radio" id="1.3" value="1.3"/>
                    <label for="1.3">Generally meets expectations but has room for improvement in at least one area</label>
                    <input type="radio" id="1.4" value="1.4"/>
                    <label for="1.4">Struggles to meet performance expectations in this area</label>
                    <label className={styles.exampleQuestion} for="1.5">Please provide examples of the employee's conduct to explain your answer:*</label>
                    <textarea className={styles.exampleTextbox} type="text" id="1.5" placeholder="Enter your answer here"></textarea>
                </div>

                <h3 className={styles.pillar}>Performance</h3>
                <div className={styles.questionBox}>
                    <p className={styles.question}>Is Cerys comfortable working autonomously?</p>
                    <input type="radio" id="2.1" value="2.1"/>
                    <label for="2.1">Consistently meets expectations and regularly exceeds what is asked of them</label>
                    <input type="radio" id="2.2" value="2.2"/>
                    <label for="2.2">Meets expectations the majority of the time</label>
                    <input type="radio" id="2.3" value="2.3"/>
                    <label for="2.3">Generally meets expectations but has room for improvement in at least one area</label>
                    <input type="radio" id="2.4" value="2.4"/>
                    <label for="2.4">Struggles to meet performance expectations in this area</label>
                    <label className={styles.exampleQuestion} for="2.5">Please provide examples of the employee's conduct to explain your answer:*</label>
                    <textarea className={styles.exampleTextbox} type="text" id="2.5" placeholder="Enter your answer here"></textarea>
                </div>

                <h3 className={styles.pillar}>Attitude</h3>
                <div className={styles.questionBox}>
                    <p className={styles.question}>Does Cerys act professionally?</p>
                    <input type="radio" id="3.1" value="3.1"/>
                    <label for="3.1">Consistently meets expectations and regularly exceeds what is asked of them</label>
                    <input type="radio" id="3.2" value="3.2"/>
                    <label for="3.2">Meets expectations the majority of the time</label>
                    <input type="radio" id="3.3" value="3.3"/>
                    <label for="3.3">Generally meets expectations but has room for improvement in at least one area</label>
                    <input type="radio" id="3.4" value="3.4"/>
                    <label for="3.4">Struggles to meet performance expectations in this area</label>
                    <label className={styles.exampleQuestion} for="3.5">Please provide examples of the employee's conduct to explain your answer:*</label>
                    <textarea className={styles.exampleTextbox} type="text" id="3.5" placeholder="Enter your answer here"></textarea>
                </div>

                <h3 className={styles.pillar}>Engagement</h3>
                <div className={styles.questionBox}>
                    <p className={styles.question}>Does Cerys communicate well with colleagues?</p>
                    <input type="radio" id="4.1" value="4.1"/>
                    <label for="4.1">Consistently meets expectations and regularly exceeds what is asked of them</label>
                    <input type="radio" id="4.2" value="4.2"/>
                    <label for="4.2">Meets expectations the majority of the time</label>
                    <input type="radio" id="4.3" value="4.3"/>
                    <label for="4.3">Generally meets expectations but has room for improvement in at least one area</label>
                    <input type="radio" id="4.4" value="4.4"/>
                    <label for="4.4">Struggles to meet performance expectations in this area</label>
                    <label className={styles.exampleQuestion} for="4.5">Please provide examples of the employee's conduct to explain your answer:*</label>
                    <textarea className={styles.exampleTextbox} type="text" id="4.5" placeholder="Enter your answer here"></textarea>
                </div>
                <button className={styles.submitFormButton}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default GeneratedForm
