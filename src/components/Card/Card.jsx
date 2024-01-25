import styles from './Card.module.css'

export default function Card( {imgUrl, alt} ) {

    return (
        <div className={styles.Card}>
            <img className={styles.Card_img} src={imgUrl} alt={alt} />
        </div>
    );
}