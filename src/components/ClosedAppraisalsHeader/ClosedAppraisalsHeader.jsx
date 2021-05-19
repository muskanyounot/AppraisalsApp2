import React from 'react';
import styles from './ClosedAppraisalsHeader.module.scss';

const ClosedAppraisalsHeader = () => {
    return (
        <div>
            <header className={styles.CAHHeader}>
                <div className={styles.CAHTitle}>
                <p>Closed Appraisals</p>
                </div>
            </header>
        </div>
    );
};
export default ClosedAppraisalsHeader;