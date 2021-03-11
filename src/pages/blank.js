import Head from 'next/head'
// import styles from '../../styles/Hello.module.scss'


import sal from 'sal.js'
import { useEffect } from 'react';

// import 'sal.js/dist/sal.css'

export default function Blank() {

    // useEffect(() => {
    //     sal();
    // }, []);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="robots" content="noindex"/>
            </Head>

            <main>
                <h1 data-sal="slide-up" data-sal-delay="100">HELLLLLLLLLO</h1>
                <h1 data-sal="slide-up" data-sal-delay="300">HELLLLLLLLLO</h1>
                <h1 data-sal="slide-up" data-sal-delay="500">HELLLLLLLLLO</h1>
                <h1 data-sal="slide-up" data-sal-delay="700">HELLLLLLLLLO</h1>
                <h1 data-sal="slide-up" data-sal-delay="900">HELLLLLLLLLO</h1>
            </main>
        </div>

        
    )
}