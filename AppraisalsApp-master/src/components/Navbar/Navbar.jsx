import React from 'react';
import Logo from './../../images/AdmiralLogo.svg';
import styles from './Navbar.module.scss';
import Account from './../../images/account.jpeg';
import Logout from './../../images/logout.png'

export const Navbar = () => {
    return (
        <navbar>
            <img src={Logo} alt="Admiral Logo" className={styles.logo}/>
            <span className={styles.title}> IT Appraisals</span>
            <button className={styles.homeBtn}>
                <span>Home</span>
            </button>
            <button className={styles.closedAppraisalsBtn}>
                <span>Closed Appraisals</span>
            </button>
            <div className={styles.profileBtn}>
                <div className={styles.profileText}>
                    <div className={styles.realProfileText}>Logged in as SinghM11</div>
                </div>
                <div className={styles.profileDropdown}>
                    <div className={styles.list}>
                        <img src={Account} className={styles.account}/>
                        <div className={styles.accountText}>Account</div>
                        <img src={Logout} className={styles.logout}/>
                        <div className={styles.logoutText}>Log Out</div>
                    </div>
                </div>
            </div>
        </navbar>
    )
}
export default Navbar;