import '@/app/styles/global.scss';
import "remixicon/fonts/remixicon.css";
import { AppProps } from 'next/app'; 

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;