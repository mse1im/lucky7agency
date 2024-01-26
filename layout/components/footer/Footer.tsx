import Container from "../container/Container";
import "./Footer.scss";

const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer>
      <div className="subscribe">
        <Container>
          <h3>Yayıncılarımız Arasına Katılmak İster Misiniz?</h3>
          <a href="#form">Başvuru Gönder</a>
        </Container>
      </div>
      <Container>
        <div className="lucky7agency">
          logo
          <p>
            Oyuncu ve menajer Temmuz Karikutal tarafından kurulan ve bugüne
            kadar televizyon ve sinema sektöründe oyuncu menajeri olarak hizmet
            veren, birçok başarılı projeye oyuncu gönderen Lucky7 Agency
          </p>
          <ul>
            <li>fb</li>
            <li>st</li>
            <li>as</li>
          </ul>
        </div>
        <ul>
          <h4>Hizmetlerimiz</h4>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ul>
          <h4>Hizmetlerimiz</h4>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ul>
          <h4>Hizmetlerimiz</h4>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <div className="info-box">
          <h5>İletişim Bilgilerimiz</h5>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
