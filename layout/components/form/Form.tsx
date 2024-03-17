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
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "date-fns";
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
  image: null,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("İsim & Soyisim eksik veya hatalı"),
  email: Yup.string()
    .email("Geçersiz e-posta adresi")
    .required("E-posta eksik veya hatalı"),
  phone: Yup.string()
    .matches(/^\d{11}$/, "Geçerli bir telefon numarası girin")
    .required("Telefon numarası zorunlu"),
  birthDate: Yup.date().required("Doğum tarihi zorunlu").nullable(),
  tiktok: Yup.string().required("TikTok kullanıcı adı zorunlu"),
  city: Yup.string().required("Şehir seçimi zorunlu"),
  image: Yup.mixed().required("Dosya yükleme zorunlu"),
  gender: Yup.string().required("Cinsiyet seçimi zorunlu"),
});

const FormArea: React.FC<IFormProps> = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const resetFormState = () => {
    setSubmissionSuccess(false); // Başarılı gönderim durumunu sıfırla
    setIsSubmitting(false); // Gönderim durumunu sıfırla (isteğe bağlı)
  };

  const onSubmit = (
    values: any,
    actions: { resetForm: () => void; setSubmitting: (arg0: boolean) => void }
  ) => {
    setIsSubmitting(true);
    const apiUrl = "https://mail-api-2gca.onrender.com/api/streamer";
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      if (key !== "image") {
        formData.append(key, values[key]);
      }
    });
    if (values.image) {
      formData.append("image", values.image);
    }

    if (values.birthDate) {
      formData.append("birthDate", format(values.birthDate, "yyyy-MM-dd"));
    }

    axios
      .post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast.success("Form başarıyla gönderildi!");
        setSubmissionSuccess(true);
        actions.resetForm();
      })
      .catch((error) => {
        toast.error("Form gönderimi sırasında bir hata oluştu.");
      })
      .finally(() => {
        setIsSubmitting(false); // Gönderim süreci tamamlandığında
      });
  };

  const SuccessComponent = () => (
    <div className="success">
      <i className="ri-checkbox-circle-fill" />{" "}
      <span>Form başarıyla gönderildi!</span>
    </div>
  );

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
            {submissionSuccess ? (
              <button onClick={resetFormState}>Formu Tekrar Doldur</button>
            ) : (
              <button>Formu Doldur, Başvuru Yap!</button>
            )}
          </div>
          {submissionSuccess ? (
            <SuccessComponent />
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({
                setFieldValue,
                values,
                setFieldTouched,
                errors,
                touched,
                handleSubmit,
              }) => (
                <Form className={isSubmitting ? "form submitting" : "form"}>
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
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Telefon Numaranız"
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
                        selected={values.birthDate}
                        onChange={(date) => setFieldValue("birthDate", date)}
                        onBlur={() => setFieldTouched("birthDate", true)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Doğum Tarihinizi Seçin"
                        className={`form-control ${
                          touched.birthDate && errors.birthDate
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="birthDate"
                        component="div"
                        className="invalid-feedback"
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
                        <option value="instagram">Instagram</option>
                        <option value="tiktok">Tiktok</option>
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
                        <option value="erkek">Erkek</option>
                        <option value="kadin">Kadın</option>
                      </Field>
                      <ErrorMessage
                        name="gender"
                        component="div"
                        className="error"
                      />
                    </label>
                  </div>

                  <div className="file-input">
                    <label htmlFor="file">
                      <i className="ri-image-line"></i>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        onChange={(event) => {
                          setFieldValue(
                            "image",
                            event.currentTarget.files &&
                              event.currentTarget.files[0]
                          );
                          setFieldTouched("image", true, false);
                        }}
                        onBlur={() => setFieldTouched("image", true)}
                      />
                      {touched.image && errors.image && (
                        <div className="error">{errors.image}</div>
                      )}
                    </label>
                  </div>

                  <button type="submit" disabled={isSubmitting}>
                    Yayıncı Başvurumu Gönder!
                  </button>
                  {isSubmitting && (
                    <div className="spinner">
                      <i className="ri-loader-fill" />
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          )}
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
