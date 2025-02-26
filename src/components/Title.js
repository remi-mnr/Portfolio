import styles from "../../styles/Title.module.scss"
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCode, faPaintBrush, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useEffect } from 'react';

export default function Title() {

    return (
        <div className={styles.slide}>
            
            <p className={styles.grid}>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</p>
            <p className={styles.grid2}>++++++++++++++++++++++++</p>
            
            

            <div className={styles.gradientBlock}/>
            <div className={styles.gradientBlock2}>
                <FontAwesomeIcon icon={faPaintBrush}/>
            </div>

            <div className={styles.gradientBlock3} />
            <div className={styles.gradientBlock4}>
                <FontAwesomeIcon icon={faCode}/>
            </div>

            <div className={styles.infos}>
                <div className={styles.nameContainer}>
                    <FontAwesomeIcon 
                    icon={faThumbsUp} 
                    className={styles.thumbs} 
                    data-sal="slide-up" 
                    data-sal-delay="1000" />

                    <p data-sal="slide-up" data-sal-delay="500"
                    className="swiper-no-swiping"
                    className={clsx(styles.name, "swiper-no-swiping")}>Rémi Ménor</p>
                </div>
                <h1 data-sal="slide-up" data-sal-delay="300" className="swiper-no-swiping">
                    Portfolio
                </h1>
                <p data-sal="slide-down" data-sal-delay="500"
                className={clsx(styles.subtitle, "swiper-no-swiping")}>Développeur Web & Mobile</p>
                
                <div data-sal="slide-up" data-sal-delay="700" 
                className={styles.buttonsContainer}>
                    <a href="https://github.com/remi-mnr" target="_blank" className={styles.button} title="Github">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>

                    {/* <a href="#" className={styles.button} title="Télécharger le Portfolio">
                        <FontAwesomeIcon icon={faDownload}/>
                    </a> */}

                    <a href="/static/CV Rémi Ménor.pdf" target="_blank" className={styles.button} title="Consulter mon CV">
                        <p>CV</p>
                    </a>
                </div>
            </div>
            
        </div>
    )
}