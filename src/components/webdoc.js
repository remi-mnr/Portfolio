import styles from "../../styles/Webdoc.module.scss"
import sal from 'sal.js'
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Webdoc() {
    sal();
    return (
        <div className={styles.slide}>

            <div className={styles.gradientBlock}/>

            <img className={styles.smallRound} src="/static/images/ski.png" alt=""/>
            <img className={styles.bigRound} src="/static/images/ski.png" alt=""/>

            <img className={styles.pc} src="/static/images/webdoc_pc.png" alt=""/>
            <img className={styles.phone} src="/static/images/webdoc_phone.png" alt=""/>

            <div className={styles.infos}>

                <img data-sal="slide-up" data-sal-delay="200"
                src="/static/images/coulissesLogo.png" alt=""/>
                
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