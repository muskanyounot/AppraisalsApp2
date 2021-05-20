import React from 'react';
import styles from './CATable.module.scss';

const CATable = () => {
    return (
        <div className={styles.CATable}>
            <section className={styles.tableHeadings1}>
                <button className={styles.headingOption1}>Scores by question</button>
                <button className={styles.headingOption2}>Year on year comparison</button>
                <button className={styles.headingOption3}>Examples and comments</button>
            </section>
            <div className={styles.tableContent}>
                
                    <div className={styles.responseCount}>20 responses</div>
                    <div className={styles.option1} >Struggles to meet expectations</div>
                    <div className={styles.option2}>Could improve</div>
                    <div className={styles.option3}>Meets expectations</div>
                    <div className={styles.option4}>Exceeds Expectations</div>
                    
                    <p className={styles.question1}>Communicates well with customers?</p>
                    <p className={styles.question2}>Can work autonomously?</p>
                    <p className={styles.question3}>Acts professionally?</p>
                    <p className={styles.question4}>Communicates well with colleagues?</p>
                    
              
                
                    <span className={styles.percentage1}>0%</span>
                    <span className={styles.percentage2}>0%</span>
                    <span className={styles.percentage3}>0%</span>
                    <span className={styles.percentage4}>0%</span>
                    <span className={styles.percentage5}>0%</span>
                    <span className={styles.percentage6}>0%</span>
                    <span className={styles.percentage7}>0%</span>
                    <span className={styles.percentage8}>0%</span>
                    <span className={styles.percentage9}>0%</span>
                    <span className={styles.percentage10}>0%</span>
                    <span className={styles.percentage11}>0%</span>
                    <span className={styles.percentage12}>0%</span>
                    <span className={styles.percentage13}>0%</span>
                    <span className={styles.percentage14}>0%</span>
                    <span className={styles.percentage15}>0%</span>
                    <span className={styles.percentage16}>0%</span>
                
            </div>
        </div>
    );
};
export default CATable;