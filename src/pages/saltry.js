import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import Head from 'next/head'
import styles from "../../styles/Hello.module.scss"

import Title from "../components/Title"
import Webdoc from "../components/Webdoc"
import Woodstack from "../components/Woodstack"



import { useState, useEffect } from 'react';


export default function Hello() {
    
    const [size, setSize] = useState("")
    useEffect(() => {

        setSize(window.innerHeight + "px");

        window.addEventListener('resize', () => {
            console.log("Resize")
            setSize(window.innerHeight + "px");
            console.log(window.innerHeight)
            // document.documentElement.style.setProperty('--vh', `${vh}px`);
        })
    }, []);

    let divStyle = {
        width: "100%", 
        height: size, 
        overflow: "hidden", 
        // position: "fixed", 
        // zIndex: 999
    };

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
                <div style={divStyle}>
                    <Woodstack />
                </div>
                <div style={{ width: "100%", height: "100vh", overflow: "hidden"}}>
                    <Webdoc />
                </div>
                <div style={{ width: "100%", height: "100vh", overflow: "hidden"}}>
                    <Title />
                </div>
            </main>
        </div>

        
    )
}