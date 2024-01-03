import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoLinkedin, mailOutline } from 'ionicons/icons';

export default function Header() {

    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Recent Work</a></li>
                    <li><a href="#contact">Get In Touch</a></li>
                </ul>
            </nav>
            <address>
                <a href="" target='_blank'>
                    <IonIcon icon={logoGithub} aria-label="Github Logo"/>
                </a>

                <a href="" target='_blank'>
                    <IonIcon icon={logoLinkedin} aria-label="Linkedin Logo"/>
                </a>

                <a href="" target='_blank'>
                    <IonIcon icon={mailOutline} aria-label="Mail Logo"/>
                </a>
            </address>
        </header>
    );
}