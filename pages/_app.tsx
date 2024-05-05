import "@/app/styles/global.scss";
import "remixicon/fonts/remixicon.css";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Titillium_Web } from "next/font/google";
import { NextSeo } from 'next-seo';

const titillum = Titillium_Web({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-golos",
});

function Lucky({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        retry: 2,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NextSeo
        title="Lucky 7 Agency - Lucky 7 Agency - TikTok Resmi Partner Ajansı"
        description="Lucky7 Agency, TikTok yayıncılarına ve canlı yayıncılara özel danışmanlık, 24/7 destek ve içerik stratejileri sunarak markalarınızın sosyal medyada büyümesine katkıda bulunur. Ücretsiz danışmanlık hizmetleriyle, TikTokta keşfedilmenizi ve kitle geliştirmenizi sağlar."
        openGraph={{
          url: 'https://www.lucky7agency.com.tr/',
          title: 'Lucky 7 Agency - Lucky 7 Agency - TikTok Resmi Partner Ajansı',
          description: 'Lucky7 Agency, TikTok yayıncılarına ve canlı yayıncılara özel danışmanlık, 24/7 destek ve içerik stratejileri sunarak markalarınızın sosyal medyada büyümesine katkıda bulunur. Ücretsiz danışmanlık hizmetleriyle, TikTokta keşfedilmenizi ve kitle geliştirmenizi sağlar.',
          images: [
            {
              url: 'https://www.lucky7agency.com.tr/img/og-image.jpg',
              width: 800,
              height: 600,
              alt: 'Lucky 7 Agency',
            }
          ],
        }}
      />
      <div className={titillum.className}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default Lucky;
