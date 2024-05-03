import Container from "../container/Container";
import darkLogo from "../../../public/footer.png";
import comment from "../../../public/comment.png";
import Image from "next/image";
import "./Footer.scss";
import Link from "next/link";

const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer id="callus">
      <div className="subscribe">
        <Container>
          <h3>Yayıncılarımız Arasına Katılmak İster Misiniz?</h3>
          <a href="#form">Başvuru Gönder</a>
        </Container>
      </div>
      <Container>
        <div className="lucky7agency">
          <Image
            src={darkLogo}
            alt="Lucky 7 Agency"
            width={387}
            loading="lazy"
            height={54}
          />
          <p>
            Tecrübeli yönetim ekibimiz, tüm sosyal medya platformlarında
            edindiği deneyimle içerik üreticilerinin karşılaştığı her türlü
            soruna çözüm sunmaktadır.
          </p>
          <ul className="social-media">
            <li>
              <a
                href="https://www.instagram.com/lucky7agencyofficial/"
                target="_blank"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@lucky7agencyofficial?lang=tr-TR"
                target="_blank"
              >
                <i className="ri-tiktok-fill"></i>
              </a>
            </li>
            <li>
              <a href="https://discord.gg/lucky7agency" target="_blank">
                <i className="ri-discord-fill"></i>
              </a>
            </li>
          </ul>
        </div>
        <ul className="content">
          <h4>Hizmetlerimiz</h4>
          <li>
            <i className="ri-arrow-right-line"></i> Tiktok Keşfet Desteği
          </li>
          <li>
            <Link
              href="https://wa.me/908503071270"
              rel="nofollow"
              target="_blank"
            >
              <i className="ri-arrow-right-line"></i> WhatsApp Destek Hattı
            </Link>
          </li>
          <li>
            <i className="ri-arrow-right-line"></i> TikTok İçerik
            Üreticilerimize Ücretsiz Danışmanlık
          </li>
        </ul>
        <ul className="content">
          <h4>Yayıncılarımız</h4>
          <li>
            <Link href="/streamer/baris-g">
              <i className="ri-arrow-right-line"></i> Baris-G
            </Link>
          </li>
          <li>
            <Link href="/streamer/sasuke">
              <i className="ri-arrow-right-line"></i> Sasuke
            </Link>
          </li>
          <li>
            <Link href="/streamer/mef">
              <i className="ri-arrow-right-line"></i> MEF
            </Link>
          </li>
          <li>
            <Link href="/streamers">
              <i className="ri-arrow-right-line"></i> Top yayıncılarımız
            </Link>
          </li>
        </ul>
        <div className="info-box">
          <h5>İletişim Bilgilerimiz</h5>
          <ul className="contact">
            <li>
              <a href="mailto:basvuru@lucky7agency.com.tr">
                <i className="ri-mail-send-line"></i>{" "}
                basvuru@lucky7agency.com.tr
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/908503071270"
                rel="nofollow"
                target="_blank"
              >
                <i className="ri-phone-fill"></i> 0850 307 12 70
              </a>
            </li>
            <li>
              <i className="ri-map-pin-line"></i>İSTANBUL / TÜRKİYE
            </li>
          </ul>
        </div>
        <Image
          src={comment}
          alt="comment"
          width={74}
          loading="lazy"
          height={56}
          className="comment-img"
        />
      </Container>
    </footer>
  );
};
export default Footer;
