import '../../styles/global.scss'
import { useEffect } from 'react';

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
