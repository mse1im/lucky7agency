import Container from "../container/Container";
import comment from "../../../public/image162.png";
import img1 from "../../../public/image173.png";
import img2 from "../../../public/image174.png";
import Image from "next/image";
import "./AboutUs.scss";

const AboutUs: React.FC<IAboutUsProps> = () => {
  return (
    <section className="aboutus" id="aboutus">
      <Container>
        <div className="aboutus-wrapper">
          <div className="badge">Ödüllü tiktok ajansı</div>
          <h2>Lucky 7 Agency</h2>
          <span>Ajansımızı Yakından Tanıyın!</span>
          <p>
            Oyuncu ve menajer Temmuz Karikutal tarafından kurulan ve bugüne
            kadar televizyon ve sinema sektöründe oyuncu menajeri olarak hizmet
            veren, birçok başarılı projeye oyuncu gönderen Temmuz Ajans, 2023
            Mart ayından itibaren artık TikTok LIVE Resmi Ajans partneri olarak,
            Tiktok yayıncılarına da hizmet vermektedir.
          </p>
        </div>
        <div className="aboutus-box-wrapper">
          <div className="box">
            <h3>Vizyonumuz</h3>
            <span>
              Lucky 7 Agency olarak, TikTok platformundaki içerik
              üreticilerimizin her birinin benzersiz potansiyelini
              keşfetmelerini ve bu platformda büyük bir etki yaratmalarını
              vizyonumuz olarak görüyoruz. <br /> <br /> İçerik üreticilerimizin özgün
              seslerini duyurmasına ve geniş kitlelere ulaşmasına olanak tanıyan
              bir ortam oluşturmak için çalışıyoruz. Onlara güçlü bir destek
              sağlayarak, yaratıcı vizyonlarını hayata geçirmeleri ve TikTok'ta
              büyümeleri için gerekli araçları ve rehberliği sunmayı
              hedefliyoruz. <br /> <br /> İçerik üreticilerimizin başarısı bizim
              önceliğimizdir ve onları desteklemek ve büyümelerine yardımcı
              olmak için buradayız.
            </span>
          </div>
          <div className="box">
            <h3>Misyonumuz</h3>
            <span>
              Lucky 7 Agency olarak, TikTok'ta içerik üreticilerimizin
              başarısını en üst düzeye çıkarmak ve onları etkileşimli ve özgün
              içerikler oluşturmak konusunda desteklemek amacıyla varız. İçerik
              üreticilerimizin potansiyelini maksimize etmek için stratejik
              rehberlik sunuyor, hedef kitlelerini etkilemek için yenilikçi
              yaklaşımları geliştiriyoruz. <br /> <br /> Onların yaratıcı vizyonlarını
              desteklemek ve TikTok platformunda büyümelerine yardımcı olmak
              için çalışıyoruz. <br /> <br /> İçerik üreticilerimizin hedeflerini
              gerçekleştirmek ve TikTok'ta başarılı bir içerik üreticisi
              olmalarını sağlamayı amaçlıyoruz.
            </span>
          </div>
          <div className="box">
            <h3>Görüşümüz</h3>
            <span>lorem ipsum</span>
          </div>
        </div>
        <Image
          src={comment}
          alt="lucky7agency"
          width={120}
          height={92}
          className="comment-img"
        />
        <Image
          src={img1}
          alt="lucky7agency"
          width={222}
          height={290}
          className="img1"
        />
      </Container>
    </section>
  );
};
export default AboutUs;
