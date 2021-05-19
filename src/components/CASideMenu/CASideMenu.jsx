import React from 'react';
import styles from './CASideMenu.module.scss';

const CASideMenu = () => {
    return (
        <div className={styles.CATContainer}>
            <div className={styles.CATList}>
                <div className={styles.CATListItem}>VYNER, Cerys</div>
                <div className={styles.CATListItem}>SINGH, Muskan 11</div>
                <div className={styles.CATListItem}>LOVELL, Jay 2</div>
                <div className={styles.CATListItem}>HOUSE, James 2</div>
            </div>
        </div>
    );
};
export default CASideMenu;