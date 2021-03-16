import styles from "../../styles/Iut.module.scss"
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCalendarDay, faClock, faCalendarCheck, faAward } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'

export default function Webdoc() {
    
    return (
        <div className={styles.slide}>
            
            <img className={styles.backgroundIut} src="/static/images/iut_background.jpg" alt=""/>

            <img className={styles.pc} src="/static/images/iut_pc.png" alt=""/>
            <img className={styles.phone} src="/static/images/iut_phone.png" alt=""/>


            <div className={styles.infos}>
                
                <div className={styles.titleContainer}>
                    <FontAwesomeIcon icon={faAward} data-sal="slide-up" data-sal-delay="600"/>
                    <p data-sal="slide-up" data-sal-delay="200">Portail des IUT Informatiques</p>
                </div>

                <div className={styles.dateContainer} data-sal="slide-up" data-sal-delay="500">
                    <FontAwesomeIcon icon={faCalendarCheck} /><p>2020 - 2021</p>
                </div>

                <p data-sal="slide-down" data-sal-delay="400"
                className={clsx(styles.subtitle, "swiper-no-swiping")}>Dans le cadre d’un <b>concours national</b>, notre tâche a été de concevoir une refonte du site internet des IUT informatiques de France.</p>

                <div className={styles.tagContainer} data-sal="slide-down" data-sal-delay="600">
                    <p>Laravel</p>
                    <p>SQL</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JQuery</p>
                    <p>Ajax</p>
                </div>

                <div data-sal="slide-right" data-sal-delay="900" className={styles.buttonContainer}>
                    <a href="#" className={styles.github} title="Github">
                        <FontAwesomeIcon icon={faGitlab}/>
                    </a>
                    {/* <a target="_blank" href="http://webdoc.crewcore.fr/" className={styles.button} title="Les coulisses de sports extrêmes">
                        <p>Démo</p> <FontAwesomeIcon icon={faChevronRight} />
                    </a> */}
                </div>

            </div>

        </div>
    )
}