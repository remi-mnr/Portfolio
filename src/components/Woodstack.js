import styles from "../../styles/Woodstack.module.scss"
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCalendarDay, faClock, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

export default function Webdoc() {
    return (
        <div className={styles.slide}>
            
            <div className={styles.smallRound} />
            <div className={styles.bigRound} />

            <img className={styles.pc} src="/static/images/foret_pc.png" alt=""/>
            <img className={styles.phone} src="/static/images/foret_phone.png" alt=""/>


            <div className={styles.infos}>
                
                <div className={styles.titleContainer}>
                    <img data-sal="slide-up" data-sal-delay="300"
                    src="/static/images/logoMy.png" alt=""/>
                    {/* <p data-sal="slide-up" data-sal-delay="200">Woodstack<sup>tool</sup></p> */}
                    <p data-sal="slide-up" data-sal-delay="200">MY-Forêt</p>
                </div>

                <div className={styles.dateContainer} data-sal="slide-up" data-sal-delay="500">
                    <FontAwesomeIcon icon={faCalendarCheck} /><p>2020 - 2021</p>
                </div>

                <p data-sal="slide-down" data-sal-delay="400"
                className={clsx(styles.subtitle, "swiper-no-swiping")}>Ce site est un <b>Web-Documentaire</b> sur les coulisses des sports extrêmes. Il propose une <b>intégration continue</b> et se veut hautement interactif.</p>

                <div className={styles.tagContainer} data-sal="slide-down" data-sal-delay="600">
                    <p>React JS</p>
                    <p>Firebase</p>
                    <p>Material UI</p>
                    <p>PWA</p>
                    <p>Netlify</p>
                </div>

                <div data-sal="slide-right" data-sal-delay="900" className={styles.buttonContainer}>
                    <a target="_blank" href="http://webdoc.crewcore.fr/" className={styles.button} title="Les coulisses de sports extrêmes">
                        <p>Démo</p> <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                </div>

            </div>

        </div>
    )
}