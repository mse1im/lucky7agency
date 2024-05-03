import Container from "../container/Container";
import "./Services.scss";
import Image from "next/image";
import services1 from "@/public/services.png";
import services2 from "@/public/services2.png";
import services3 from "@/public/services3.png";

const Services: React.FC<IServicesProps> = () => {
  return (
    <section className="services" id="services">
      <Container>
        <div className="title">
          <span>Lucky 7 Agency</span>
          <h2>Hizmetlerimiz</h2>
        </div>
        <div className="services-wrapper">
          <div className="box">
            <div className="badge">
              <span>+100 Başarılı Projeler</span>
            </div>
            <div className="info">
              <Image
                src={services1}
                loading="lazy"
                alt="Tiktok Keşfet Desteği"
                width={90}
                height={90}
              />
              <h3>Tiktok Keşfet Desteği</h3>
              <p>
                TikTok Keşfet Desteği hizmetinin içerisinde, yayıncılarımıza
                keşfette daha büyük kitlelere ulaşabilmeleri için püf noktalar
                ve bilgiler iletiyoruz. Bu bilgileri öğrenip, TikTok
                algoritmasının kurallarına uyarak içerik ürettiklerinde
                keşfetten çok yüksek etkileşimlere erişebiliyorlar.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="badge">
              <span>+100 Başarılı Projeler</span>
            </div>
            <div className="info">
              <Image
                src={services2}
                alt="Tiktok Keşfet Desteği"
                width={90}
                loading="lazy"
                height={90}
              />
              <h3>WhatsApp Destek Hattı</h3>
              <p>
                WhatsApp Destek Hattı tüm yayıncılarımız içi hizmet vermektedir.
                Yayıncılarımız yaşadıkları problemlerle ilgili sonuçları ve
                TikTtok ile ilgili tüm gelişmeleri anlık olarak WhatsApp
                üzerinden TikTok temsilcilerimizden öğrenebiliyorlar.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="badge">
              <span>+100 Başarılı Projeler</span>
            </div>
            <div className="info">
              <Image
                src={services3}
                alt="Tiktok Keşfet Desteği"
                width={90}
                loading="lazy"
                height={90}
              />
              <h3>TikTok İçerik Üreticilerimize Ücretsiz Danışmanlık</h3>
              <p>TikTok Ajansı olarak, TikTok'ta canlı yayın açan ve içerik üreticisi kullanıcılarına ücretsiz danışmanlık hizmeti sunmaktayız.</p>
            </div>
          </div>
        </div>
      </Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1049"
        height="567"
        viewBox="0 0 989 931"
        fill="none"
      >
        <g filter="url(#filter0_f_33_17)">
          <path
            d="M443.816 380.624C375.875 333.568 319.63 307.268 300 300H1348.86C1347 326.875 1344.4 389.751 1348.86 426.26C1354.44 471.896 1188.93 419.668 1117.02 565.703C1045.11 711.739 1024.04 580.916 885.801 483.051C747.564 385.187 680.616 471.896 552.917 510.94C425.219 549.984 528.741 439.444 443.816 380.624Z"
            fill="url(#paint0_linear_33_17)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_33_17"
            x="0"
            y="0"
            width="1649"
            height="931"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_33_17"
            />
          </filter>
          <linearGradient
            id="paint0_linear_33_17"
            x1="369.109"
            y1="465.5"
            x2="1289.35"
            y2="465.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E6BC31" />
            <stop offset="1" stopColor="#2D2AD7" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};
export default Services;
