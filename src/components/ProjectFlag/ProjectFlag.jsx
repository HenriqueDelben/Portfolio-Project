import styles from './ProjectFlag.module.css'
import classnames from 'classnames/bind';

const cx = classnames.bind(styles)

export default function ProjectFlag( {flag, color} ) {

    return (
        <div className={cx("Flag", {
            [`Flag___${color}`]: color
        })}>
            {flag}
        </div>
    );
}