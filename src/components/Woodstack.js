import styles from "../../styles/Woodstack.module.scss"
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCalendarDay, faClock, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// import sal from 'sal.js'
import { useEffect } from 'react';

export default function Webdoc() {
    // useEffect(() => {
    //     sal();
    // }, []);
    
    return (
        <div className={styles.slide}>
            
            <img className={styles.smallRound} src="/static/images/foret2.jpg" alt=""/>
            <img className={styles.bigRound} src="/static/images/foret2.jpg" alt=""/>

            <img className={styles.pc} src="/static/images/foret_pc.png" alt=""/>
            <img className={styles.phone} src="/static/images/foret_phone.png" alt=""/>


            <div className={styles.infos}>

                <img data-sal="slide-up" data-sal-delay="300"
                src="/static/images/myforetLogo.png" alt=""/>
                
                {/* <div className={styles.titleContainer}> */}
                    {/* <img data-sal="slide-up" data-sal-delay="300"
                    src="/static/images/logoMy.png" alt=""/> */}
                    {/* <p data-sal="slide-up" data-sal-delay="200">MY-Forêt</p> */}

                    {/* <p data-sal="slide-up" data-sal-delay="200">Woodstack<sup>tool</sup></p> */}
                {/* </div> */}

                <div className={styles.dateContainer} data-sal="slide-up" data-sal-delay="500">
                    <FontAwesomeIcon icon={faCalendarCheck} /><p>2020 - 2021</p>
                </div>

                <p data-sal="slide-down" data-sal-delay="400"
                className={clsx(styles.subtitle, "swiper-no-swiping")}>Réalisation d’une application permettant de gérer les <b>stocks</b> de bois, de gérer les <b>chantiers</b>, et de générer des devis et factures en <b>PDF</b>.</p>
                {/* dev continue, PWA, phone */}

                <div className={styles.tagContainer} data-sal="slide-down" data-sal-delay="600">
                    <p>React JS</p>
                    <p>Firebase</p>
                    <p>Material UI</p>
                    <p>PWA</p>
                    <p>Netlify</p>
                </div>

                <div data-sal="slide-right" data-sal-delay="900" className={styles.buttonContainer}>
                    <a target="_blank" href="https://github.com/remi-mnr/My-Foret" className={styles.github} title="Github">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a target="_blank" href="https://my-foret-demo.netlify.app/" className={styles.button} title="Les coulisses de sports extrêmes">
                        <p>Démo</p> <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                </div>

            </div>

        </div>
    )
}