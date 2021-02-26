import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import Image from 'next/image'
import Head from 'next/head'
import styles from '../../styles/Hello.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel, A11y]);
export default function Hello() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
                    <SwiperSlide
                        className={styles.swiperCard}
                        style={{
                            // width: "100vw", 
                            // height: "100vh",
                            backgroundImage: "linear-gradient(to right bottom,rgb(255 221 0), rgb(255 126 34))"
                        }}
                        >
                        <h1 className="swiper-no-swiping">Portfolio</h1>
                        <FontAwesomeIcon icon={faCoffee} />
                        <div className={styles.image}>
                            <Image
                            alt="Kadijak" 
                            src="/kadijak.png"
                            layout="fill"
                            objectFit="contain"
                            // quality={100}
                            // className="float-effect"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><a href='#'>JUL !!!!</a>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
                </Swiper>
            </main>
        </div>

        
    )
}