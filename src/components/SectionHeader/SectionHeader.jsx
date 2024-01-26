import styles from './SectionHeader.module.css';
import classnames from 'classnames/bind';
import PropTypes from "prop-types";

const cx = classnames.bind(styles);

export default function SectionHeader({title, content, textColor, position, heading} ) {

    return (
        <div className={cx("SectionHeader", {
            [`SectionHeader___${textColor}`]: textColor,
            [`SectionHeader___${position}`]: position,
            [`SectionHeader___${heading}`]: heading
        })}>
            <div className={styles.SectionHeader_h1Container}>
                <h1 className={styles.SectionHeader_h1}>{title}</h1>
            </div>
            <p className={styles.SectionHeader_p}>{content}</p>
        </div>
    );
}

SectionHeader.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    textColor: PropTypes.oneOf(["black", "white"]),
    position: PropTypes.oneOf(["left", "center"]),
    heading: PropTypes.oneOf(["normal", "small"])
}