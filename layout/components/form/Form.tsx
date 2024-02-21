"use client";
import Container from "../container/Container";
import "./Form.scss";
import Image from "next/image";
import formImage from "@/public/form.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { cities } from "./cities";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  birthDate: null,
  tiktok: "",
  city: "",
  hearus: "",
  gender: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("İsim & Soyisim eksik veya hatalı"),
  email: Yup.string()
    .email("Geçersiz e-posta adresi")
    .required("E-posta eksik veya hatalı"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Geçerli bir telefon numarası girin")
    .required("Telefon numarası zorunlu"),
  birthDate: Yup.date().required("Doğum tarihi zorunlu").nullable(),
  tiktok: Yup.string().required("TikTok kullanıcı adı zorunlu"),
  city: Yup.string().required("Şehir seçimi zorunlu"),
  gender: Yup.string().required("Cinsiyet seçimi zorunlu"),
});

function PhoneInput({ value, onChange }: IFormProps) {
  const [inputValue, setInputValue] = useState(value);

  // const handleChange = (e: any) => {
  //   let val = e.target.value;

  //   val = val.replace(/[^\d]/g, "");

  //   if (val.length <= 11) {
  //     setInputValue(val);
  //     onChange(val);
  //   }
  // };

  const formatPhone = (val: any) => {
    if (!val) return "";

    const match = val.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
      return `${match[1]}(${match[2]}) ${match[3]} ${match[4]} ${match[5]}`;
    }

    return val;
  };

  return (
    <input
      type="tel"
      value={formatPhone(inputValue)}
      // onChange={handleChange}
      placeholder="Telefon Numaranız"
    />
  );
}

const FormArea: React.FC<IFormProps> = () => {
  return (
    <section className="form" id="form">
      <Container>
        <div className="title">
          <span>Lucky 7 Agency</span>
          <h2>Yayıncı Başvurusu Yapın</h2>
        </div>
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className="form-wrapper-action">
                  <label htmlFor="name">
                    <i className="ri-user-line"></i>
                    <Field
                      type="text"
                      name="name"
                      placeholder="İsim & Soyisim"
                    />

                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </label>

                  <label htmlFor="email">
                    <i className="ri-mail-line"></i>
                    <Field
                      type="email"
                      name="email"
                      placeholder="E-posta Adresiniz"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </label>

                  <label htmlFor="phone">
                    <i className="ri-smartphone-line"></i>
                    <PhoneInput
                      value={values.phone}
                      onChange={(val: any) => setFieldValue("phone", val)}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="error"
                    />
                  </label>

                  <label htmlFor="birthDate">
                    <i className="ri-cake-2-line"></i>
                    <DatePicker
                      name="birthDate"
                      selected={
                        values.birthDate ? new Date(values.birthDate) : null
                      }
                      onChange={(date) => setFieldValue("birthDate", date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Doğum Tarihiniz"
                    />
                    <ErrorMessage
                      name="birthDate"
                      component="div"
                      className="error"
                    />
                  </label>

                  <label htmlFor="tiktok">
                    <i className="ri-tiktok-fill"></i>
                    <Field
                      type="text"
                      name="tiktok"
                      placeholder="TikTok Kullanıcı Adınız"
                    />
                    <ErrorMessage
                      name="tiktok"
                      component="div"
                      className="error"
                    />
                  </label>

                  <label htmlFor="city">
                    <i className="ri-building-2-line"></i>
                    <Field as="select" name="city">
                      <option value="">Şehir Seçiniz</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="error"
                    />
                  </label>

                  <label htmlFor="hearus">
                    <i className="ri-news-line"></i>
                    <Field as="select" name="hearus">
                      <option value="">Bizi Nereden Duydunuz?</option>
                      <option value="twitter">Twitter</option>
                      <option value="facebook">Facebook</option>
                      <option value="linkedin">LinkedIn</option>
                    </Field>
                    <ErrorMessage
                      name="hearus"
                      component="div"
                      className="error"
                    />
                  </label>

                  <label htmlFor="gender">
                    <i className="ri-women-line"></i>
                    <Field as="select" name="gender">
                      <option value="">Cinsiyet Seçiniz</option>
                      <option value="male">Erkek</option>
                      <option value="female">Kadın</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="error"
                    />
                  </label>
                </div>

                <label htmlFor="file">
                  <i className="ri-image-line"></i>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(event) => {
                      setFieldValue(
                        "file",
                        event.currentTarget.files &&
                          event.currentTarget.files[0]
                      );
                    }}
                  />
                  <ErrorMessage name="file" component="div" className="error" />
                </label>

                <button type="submit">Yayıncı Başvurumu Gönder!</button>
              </Form>
            )}
          </Formik>
        </div>
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
export default FormArea;
