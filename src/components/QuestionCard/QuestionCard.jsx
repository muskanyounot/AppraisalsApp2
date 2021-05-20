import React from 'react';
import styles from './QuestionCard.module.scss';

const QuestionCard = (props) => {
    return (
        <div className={styles.questionBox}>
        <p className={styles.question}>{props.question}</p>
        <input className={styles.radio} name={props.radioName} type="radio" id="1.1" value="1.1"/>
        <label for="1.1">Consistently meets expectations and regularly exceeds what is asked of them</label>
        <input className={styles.radio} name={props.radioName} type="radio" id="1.2" value="1.2"/>
        <label for="1.2">Meets expectations the majority of the time</label>
        <input className={styles.radio} name={props.radioName} type="radio" id="1.3" value="1.3"/>
        <label for="1.3">Generally meets expectations but has room for improvement in at least one area</label>
        <input className={styles.radio} name={props.radioName} type="radio" id="1.4" value="1.4"/>
        <label for="1.4">Struggles to meet performance expectations in this area</label>
        <label className={styles.exampleQuestion} for="1.5">Please provide examples of the employee's conduct to explain your answer:*</label>
        <textarea className={styles.exampleTextbox} type="text" id="1.5" placeholder="Enter your answer here"></textarea>
        </div>
        )
    }
    
export default QuestionCard;