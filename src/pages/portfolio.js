import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import Head from 'next/head'
import styles from "../../styles/Hello.module.scss"

import Title from "../components/title"
import Webdoc from "../components/webdoc"
// import { useState, useEffect } from 'react';


SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel, A11y]);
export default function Hello() {
    // const [color, setColor] = useState("#111111")

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setColor("#"+Math.floor(1000 + Math.random() * 900000))
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Mon portfolio et mes projets de développement" />
                {/* <meta name="theme-color" content={color}/> */}
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
                onSlideChange={() => console.log('slide change')}
                centeredSlides
                // grabCursor
                // simulateTouch={false}
                className={styles.swiper}
                >
                    {[ <Webdoc />, <Title />,<Webdoc />,<Title />,<Title />,<Title /> ].map((component, index) => 
                        <SwiperSlide key={index}>
                            {component}
                        </SwiperSlide>
                    )}
                    {/* <SwiperSlide>
                        <Title />
                    </SwiperSlide> */}
                </Swiper>
            </main>
        </div>

        
    )
}