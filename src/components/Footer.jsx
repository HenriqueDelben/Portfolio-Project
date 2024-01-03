import React from 'react';
import { IonIcon } from '@ionic/react';
import { heart } from 'ionicons/icons';

export default function Footer() {
    return (
        <footer>
            <p>Made with <IonIcon icon={heart}/> </p>
        </footer>
    );
}