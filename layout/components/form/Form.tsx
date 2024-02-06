"use client";
import Container from "../container/Container";
import "./Form.scss";
import Image from "next/image";
import formImage from "@/public/form.png";
import emailjs from "emailjs-com";

const Form: React.FC<IFormProps> = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          alert("Mesaj başarıyla gönderildi!");
        },
        (error) => {
          alert("Mesaj gönderilirken bir hata oluştu.");
        }
      );
  };

  return (
    <section className="form" id="form">
      <Container>
        <div className="title">
          <span>Lucky 7 Agency</span>
          <h2>Yayıncı Başvurusu Yapın</h2>
        </div>
        <form onSubmit={sendEmail}>
          <div className="form-wrapper">
            <div className="form-wrapper-infobox">
              <Image
                src={formImage}
                alt="Başvuru Yap, Yayıncı Ol"
                width={122}
                height={122}
                priority
              />
              <h2>Sizde Yayıncı Olun</h2>
              <p>
                Siz de TikTok yayıncısıysanız ya da yayıncı olmak istiyorsanız
                başvuru yapabilirsiniz.
              </p>
              <span>Başvuru Şartlarımız:</span>
              <ul>
                <li>Aylık 7 gün / 15 saat üzeri yayın açmak</li>
                <li>Aktif geçerli gün olması için minimum 60 dk yayın açmak</li>
                <li>
                  Hesabınızın 1K takipçi üzeri ve 200K takipçinin altında olması
                </li>
                <li>
                  Herhangi bir ay içerisinde 1500$ üzeri gelirinizin olmaması
                </li>
              </ul>
              <button>Formu Doldur, Başvuru Yap!</button>
            </div>
            <div className="form-wrapper-action">
              <div className="form-wrapper-action-l">
                <input
                  type="text"
                  name="user_name"
                  placeholder="İsim Soyisim"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="E-posta Adresi"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Mesajınız"
                  required
                ></textarea>
              </div>
              <div className="form-wrapper-action-r">
                telefon numarası ve fotoğraf yükleme
              </div>
              <button type="submit">gönder</button>
            </div>
          </div>
        </form>
      </Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="575"
        height="631"
        viewBox="0 0 579 1176"
        fill="none"
      >
        <g filter="url(#filter0_f_33_16)">
          <path
            d="M28.6238 796.649C-18.4321 833.926 -44.732 864.786 -52 875.556L-52 300.076C-25.1254 301.096 37.751 302.524 74.2598 300.076C119.896 297.015 67.668 387.826 213.703 427.28C359.739 466.734 228.916 478.298 131.051 554.144C33.1874 629.991 119.896 666.724 158.94 736.788C197.984 806.852 87.4436 750.053 28.6238 796.649Z"
            fill="url(#paint0_linear_33_16)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_33_16"
            x="-352"
            y="0.00012207"
            width="931"
            height="1175.56"
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
              result="effect1_foregroundBlur_33_16"
            />
          </filter>
          <linearGradient
            id="paint0_linear_33_16"
            x1="113.5"
            y1="837.638"
            x2="113.5"
            y2="332.729"
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
export default Form;
