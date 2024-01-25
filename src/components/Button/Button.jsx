import styles from './Button.module.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

export default function Button( {text, url, color, size} ) {

    return (
        <div className={cx("Button", {
            [`Button___${color}`]: color,
            [`Button___${size}`]: size
        })}>
            <a className={styles.Button_text} href={url}>{text}</a>
        </div>
    );

    /* 
    MODIFICACOES:
    - cor: verde, amarelo
    - tamanho
    
    .Button - cor verde e tamanho normal
    .Button---yellow
    .Button---small
    .Button--big
    */
} 