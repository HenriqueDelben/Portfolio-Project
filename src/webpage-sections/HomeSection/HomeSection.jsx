import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import Button from "../../components/Button/Button.jsx";
import Card from '../../components/Card/Card.jsx'
import styles from './HomeSection.module.css'
import profilePic from '../../assets/images/97563923.png'
import Header from "../../components/Header/Header.jsx";
const images = import.meta.glob('../../assets/images/*.svg');

export default function HomeSection() {

    const cards = [];

    let i = 0
    for (const imgKey in images) {
        cards.push(
            <div className={styles.HomeSection_cards_img} key={"card" + (i + 1)}>
                <Card imgUrl={imgKey.replace("../..", "src")}/>
            </div>
        )

        i++
    }

    return (
        <section className={styles.HomeSection}>
            <div className={styles.HomeSection_headerContainer}>
                <Header/>
            </div>

            <div className={styles.HomeSection_sectionContent}>
                <div className={styles.HomeSection_sectionHeaderContainer}>
                    <SectionHeader
                        title="Henrique Delben"
                        content="Com grande apreço à arquitetura e design, realizo projetos com grande foco na
                    Engenharia de Requisitos. Acredito que elicitação é a chave para um sistema relevante e funcional"
                    />
                    <div className={styles.HomeSection_buttonContainer}>
                        <Button text="Vamos começar!" url={""}/>
                    </div>
                </div>
            </div>

            <div className={styles.HomeSection_imgContainer}>
                <img className={styles.HomeSection_img} src={profilePic} alt="Profile Picture"/>
            </div>

            <div className={styles.HomeSection_cardsContainer}>
                <p>Tecnologias</p>
                <div className={styles.HomeSection_cards}>
                    {cards}
                </div>
            </div>
        </section>
    );
}

// TODO utilizar do display grid e @media queries para mudar a configuracao de responsividade do grid em breakpoints especificos



