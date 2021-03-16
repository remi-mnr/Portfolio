import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import Head from 'next/head'
import styles from "../../styles/Hello.module.scss"

import Title from "../components/Title"
import Webdoc from "../components/Webdoc"
import Woodstack from "../components/Woodstack"
import IutInfo from "../components/IutInfo"

import { useState, useEffect } from 'react';

SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel, A11y]);
export default function Hello() {
    const colorList = [
        "#2d2d2d",
        "#1AA762",
        "#1486ff",
        "#a262e2", //7c4dff
        // "#fcb70c , 2d2d2d"
    ]
    const [color, setColor] = useState(colorList[0])

    const updateColor = (swiper) => {
        console.log(swiper.activeIndex)
        setColor(colorList[swiper.activeIndex])
    }
    
    // useEffect(() => {
    //     const swiper = document.querySelector('.swiper-container').swiper;
    //     console.log(swiper.realIndex)
        // swiper.slideNext();
    //     const interval = setInterval(() => {
    //       setColor("#"+Math.floor(1000 + Math.random() * 900000))
    //     }, 1000);
    //     return () => clearInterval(interval);

        // let vh = window.innerHeight * 0.01;
        // document.documentElement.style.setProperty('--vh', `${vh}px`);

        // window.addEventListener('resize', () => {
        //     console.log("Resize")
        //     let vh = window.innerHeight * 0.01;
        //     console.log(vh)
        //     document.documentElement.style.setProperty('--vh', `${vh}px`);
        // })
    // }, []);

    // console.log(swiper.activeIndex)

    // sal({
    //     // threshold: 1,
    //     once: true
    // });
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Mon portfolio et mes projets de développement" />
                <meta name="theme-color" content={color}/>
                <meta name="robots" content="noindex"/>
            </Head>

            <main>
                <Swiper
                // spaceBetween={50}
                // slidesPerView={1}
                // navigation
                mousewheel
                direction="vertical"
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => updateColor(swiper)}
                centeredSlides
                // grabCursor
                // simulateTouch={false}
                className={styles.swiper}
                >
                    {[ <Title />,<Woodstack />,<Webdoc />, <IutInfo />].map((component, index) => 
                        <SwiperSlide key={index}>
                            {component}
                        </SwiperSlide>
                    )}
                </Swiper>
            </main>
        </div>

        
    )
}