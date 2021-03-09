import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import Head from 'next/head'
import styles from "../../styles/Hello.module.scss"

import Title from "../components/Title"
import Webdoc from "../components/Webdoc"
import Woodstack from "../components/Woodstack"


// import sal from 'sal.js'

import { useEffect } from 'react';


export default function Hello() {
    
    // useEffect(() => {
    //     sal();
    // }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Mon portfolio et mes projets de développement" />
                <meta name="robots" content="noindex"/>
            </Head>

            <main>
                <div style={{ width: "100%", height: "100vh", overflow: "hidden"}}>
                    <Title />
                </div>
                <div style={{ width: "100%", height: "100vh", overflow: "hidden"}}>
                    <Webdoc />
                </div>
                <div style={{ width: "100%", height: "100vh", overflow: "hidden"}}>
                    <Woodstack />
                </div>
            </main>
        </div>

        
    )
}