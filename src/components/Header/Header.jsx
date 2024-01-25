import React from 'react';
import { IonIcon } from '@ionic/react';
import {logoGithub, logoLinkedin, mailOutline} from 'ionicons/icons';
import styles from './Header.module.css';


export default function Header() {

    return (
        <header className={styles.Header}>
            <nav>
                <ul className={styles.Header_nav_ul}>
                    <li><a className={styles.Header_nav_li} href="#home">Home</a></li>
                    <li><a className={styles.Header_nav_li} href="#projects">Recent Work</a></li>
                    <li><a className={styles.Header_nav_li} href="#contact">Get In Touch</a></li>
                </ul>
            </nav>
            <address className={styles.Header_address}>
                <a href="" target='_blank'>
                    <IonIcon className={styles.Header_adress_icon} icon={logoGithub} aria-label="Github Logo"/>
                </a>

                <a href="" target='_blank'>
                    <IonIcon className={styles.Header_adress_icon} icon={logoLinkedin} aria-label="Linkedin Logo"/>
                </a>

                <a href="" target='_blank'>
                    <IonIcon className={styles.Header_adress_icon} icon={mailOutline} aria-label="Mail Logo"/>
                </a>
            </address>
        </header>
    );
}