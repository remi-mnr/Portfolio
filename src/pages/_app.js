// import '../../styles/globals.css'

import '../../styles/global.scss'

// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';


// import "@fontsource/open-sans"
// import "@fontsource/source-sans-pro/700.css"
// import '~sal.js/src/sal.scss';
import { useEffect } from 'react';

// import 'swiper/swiper.less';
// import 'swiper/components/navigation/navigation.less';
// import 'swiper/components/pagination/pagination.less';
// import 'swiper/components/scrollbar/scrollbar.less';
// import 'sal.js'

// import sal from 'sal.js';
// import 'sal.js/src/sal.scss';

import sal from 'sal.js'
import 'sal.js/dist/sal.css';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		sal({
			once: false
		});
	}, [])

	return <Component {...pageProps} />
}

export default MyApp
