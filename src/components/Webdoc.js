import styles from "../../styles/Webdoc.module.scss"
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCalendarDay, faClock, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

// import sal from 'sal.js'
import { useEffect } from 'react';

export default function Webdoc() {
    // useEffect(() => {
    //     sal();
    // }, []);

    return (
        <div className={styles.slide}>

            <img className={styles.smallRound} src="/static/images/ski2.jpg" alt=""/>
            <img className={styles.bigRound} src="/static/images/ski2.jpg" alt=""/>

            <img className={styles.pc} src="/static/images/webdoc_pc-min.png" alt=""/>
            <img className={styles.phone} src="/static/images/webdoc_phone.png" alt=""/>

            <div className={styles.infos}>

                <img data-sal="slide-up" data-sal-delay="200"
                src="/static/images/coulissesLogo.png" alt=""/>

                <div className={styles.dateContainer} data-sal="slide-up" data-sal-delay="500">
                    <FontAwesomeIcon icon={faCalendarCheck} /><p>2018</p>
                </div>
                
                <p data-sal="slide-down" data-sal-delay="400"
                className={clsx(styles.subtitle, "swiper-no-swiping")}>Ce site est un <b>Web-Documentaire</b> sur les coulisses des sports extrêmes. Il propose une navigation originale et se veut hautement interactif.</p>
                
                <div className={styles.tagContainer} data-sal="slide-down" data-sal-delay="600">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JQuery</p>
                    <p>Photoshop</p>
                    <p>Premiere Pro</p>
                </div>

                <div data-sal="slide-right" data-sal-delay="900" className={styles.buttonContainer}>
                    <a target="_blank" href="http://webdoc.crewcore.fr/" className={styles.button} title="Les coulisses de sports extrêmes">
                        <p>C'est parti !</p> <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                </div>

            </div>
            
        </div>
    )
}