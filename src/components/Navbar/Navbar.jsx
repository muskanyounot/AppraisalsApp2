import React from 'react';
import Logo from './../../images/AdmiralLogo.svg';
import styles from './Navbar.module.scss';
import Account from './../../images/account.jpeg';
import Logout from './../../images/logout.png'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global';
import { Link } from "react-router-dom";
import ThemeSelector from '../ThemeSelector'

export const Navbar = (props) => {
    return (
        <>
                <navbar>
                <Link to="/"><img src={Logo} alt="Admiral Logo" className={styles.logo}/></Link>
                <span className={styles.title}> IT Appraisals</span>
                <div className={styles.profileBtn}>
                    <div className={styles.profileText}>
                        <div className={styles.realProfileText}>Logged in as SinghM11<ThemeSelector themeChanger={props.themeChanger}/></div>
                        
                    </div>
                    <div className={styles.profileDropdown}>
                        <div className={styles.list}>
                            <img src={Account} className={styles.account}/>
                            <div className={styles.accountText}>Account</div>
                            <img src={Account} className={styles.closedAppraisals}/>
                            <Link to="/closedappraisals"><div className={styles.closedAppraisalsText}>Closed Appraisals</div></Link>
                            <img src={Logout} className={styles.logout}/>
                            <div className={styles.logoutText}>Log Out</div>
                        </div>
                    </div>
                </div>
                </navbar>
                </>
    )
}

export default Navbar;