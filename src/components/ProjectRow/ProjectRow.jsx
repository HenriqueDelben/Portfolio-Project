import styles from './ProjectRow.module.css';
import ProjectFlag from "../ProjectFlag/ProjectFlag.jsx";
import Button from "../Button/Button.jsx";
import foto from '../../assets/images/foto.png'

export default function ProjectRow({title, description, flag, imgUrl, projectUrl, color} ) {

    return (
        <section className={styles.ProjectCard}>
            <div className={styles.ProjectCard_contentWrapper}>
                <div className={styles.ProjectCard_content}>
                    <div>
                        <ProjectFlag flag={flag} color={color}/>
                    </div>

                    <div className={styles.ProjectCard_content_heading}>
                        <h3 className={styles.ProjectCard_content_heading_h1}>{title}</h3>
                        <p className={styles.ProjectCard_content_heading_p}>{description}</p>
                    </div>

                    <div>
                        <Button text="Ver projeto >" url={projectUrl} color={color} size={"small"}/>
                    </div>
                </div>
            </div>

            <div className={styles.ProjectCard_imgWrapper}>
                <img className={styles.ProjectCard_img} src={foto} alt="Foto Projeto"/>
            </div>
        </section>
    );

}