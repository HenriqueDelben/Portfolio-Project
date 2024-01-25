import styles from './SectionHeader.module.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

export default function SectionHeader({title, content, textColor} ) {

    return (
        <div className={cx("SectionHeader", {
            [`SectionHeader___${textColor}`]: textColor
        })}>
            <div className={styles.SectionHeader_h1Container}>
                <h1 className={styles.SectionHeader_h1}>{title}</h1>
            </div>
            <p className={styles.SectionHeader_p}>{content}</p>
        </div>
    );
}

/*
    MODIFICACOES
    - tamanho do componente como um todo: normal, big, small
*/