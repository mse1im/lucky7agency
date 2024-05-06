import '@/app/styles/global.scss';
import 'remixicon/fonts/remixicon.css';
import { AppProps } from 'next/app'; 
import { Titillium_Web } from 'next/font/google';

const titillum = Titillium_Web({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-golos",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={titillum.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;