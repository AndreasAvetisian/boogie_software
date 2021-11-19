import React from "react";
import styles from '../styles/Topbar.module.scss';
import logo from "../pictures/boogie-logo-rgb.png";

export default function Topbar() {
    return (
        <div className={styles.topbar}>
            <div className={styles.topbarContent}>
                <div className={styles.logo}>
                    <img src={logo} width="160px" height="52.36px"/>
                </div>
                <div className={styles.peCoBuJo}>
                    <div className={styles.element}>PEOPLE</div>
                    <div className={styles.element}>COMPANY</div>
                    <div className={styles.element}>BUSINESS</div>
                    <div className={styles.element}>JOIN US</div>
                </div>
                <div className={styles.darkModeButton}>
                    <input type="checkbox"/>
                </div>
            </div>
        </div>
    );
}