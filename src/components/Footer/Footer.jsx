import { IonIcon } from '@ionic/react';
import { heart } from 'ionicons/icons';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <p className={styles.Footer_p}>Made with <span className={styles.Footer_p_icon}><IonIcon icon={heart}/></span></p>
        </footer>
    );
}