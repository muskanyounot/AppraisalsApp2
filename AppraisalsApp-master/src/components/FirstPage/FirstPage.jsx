import React from 'react';
import styles from './FirstPage.module.scss'

export const FirstPage = () => {
    return (
        <div>
            <header>
                <p>New Appraisal Form</p>
            </header>
            <div className={styles.appraiserName}>
                <label>Appraiser Name</label>
                <input type={Text} placeholder="Please Enter Full Name"></input>
            </div>
            <div className={styles.appraiseeName}>
                <label>Appraisee Name</label>
                <input type={Text} placeholder="Please Enter Full Name"></input>
            </div>
            <div className={styles.appraiseeJobTitle}>
                <label>Appraisee Job Title</label>
                <input type={Text}></input>
            </div>
        </div>
    )
}
export default FirstPage;