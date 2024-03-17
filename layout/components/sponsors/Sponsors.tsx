"use client";
import Container from "../container/Container";
import "./Sponsors.scss";
import "../form/Form.scss";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { toast } from "react-toastify";

const initialValues = {
  brandname: "",
  branddesc: "",
  desc: "",
  name: "",
  email: "",
  phone: "",
};

const validationSchema = Yup.object().shape({
  brandname: Yup.string().required("Firma ismi eksik veya hatalı"),
  name: Yup.string().required("İsim & Soyisim eksik veya hatalı"),
  branddesc: Yup.string().required("Firmanız hakkında kısa bilgi giriniz"),
  desc: Yup.string().required("İş birliğiniz için kısa bilgi giriniz"),
  email: Yup.string()
    .email("Geçersiz e-posta adresi")
    .required("E-posta eksik veya hatalı"),
  phone: Yup.string()
    .matches(/^\d{11}$/, "Geçerli bir telefon numarası girin")
    .required("Telefon numarası zorunlu"),
});

const Sponsors: React.FC<ISponsorsProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (
    values: any,
    actions: any
  ) => {
    setIsSubmitting(true);
    const apiUrl = "https://mail-api-2gca.onrender.com/api/sponsor";
    const formData = new FormData();
  
    for (const key in values) {
      formData.append(key, values[key]);
    }
  
    axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log("Form başarıyla gönderildi:", response.data);
      toast.success("Mail Gönderildi!", {
        position: "top-right",
        autoClose: 15000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      actions.resetForm();
      setIsModalOpen(false);
    })
    .catch((error) => {
      console.error("Form gönderimi sırasında hata oluştu:", error);
    })
    .finally(() => {
      actions.setSubmitting(false);
      setIsSubmitting(false);
    });
  };

  const SuccessComponent = () => (
    <div className="success">
      <i className="ri-checkbox-circle-fill" />{" "}
      <span>Form başarıyla gönderildi!</span>
    </div>
  );

  return (
    <>
      <section className="sponsors">
        <Container>
          <div className="title">
            <span>Lucky 7 Agency</span>
            <h2>Sponsorlarımız</h2>
          </div>
          <div className="getanoffer">
            <button onClick={() => setIsModalOpen(true)}>
              <i className="ri-shake-hands-line"></i> teklif al
            </button>
          </div>
        </Container>
        <Swiper
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay]}
          className="Sponsors"
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            {/* <Image src={sponsor} alt="Siemens" width={221} height={35} /> */}
            <span>COMING SOON</span>
          </SwiperSlide>
          <SwiperSlide>
            {/* <Image src={sponsor} alt="Siemens" width={221} height={35} /> */}
            <span>COMING SOON</span>
          </SwiperSlide>
          <SwiperSlide>
            {/* <Image src={sponsor} alt="Siemens" width={221} height={35} /> */}
            <span>COMING SOON</span>
          </SwiperSlide>
          <SwiperSlide>
            {/* <Image src={sponsor} alt="Siemens" width={221} height={35} /> */}
            <span>COMING SOON</span>
          </SwiperSlide>
          <SwiperSlide>
            {/* <Image src={sponsor} alt="Siemens" width={221} height={35} /> */}
            <span>COMING SOON</span>
          </SwiperSlide>
          <SwiperSlide>
            {/* <Image src={sponsor} alt="Siemens" width={221} height={35} /> */}
            <span>COMING SOON</span>
          </SwiperSlide>
        </Swiper>
      </section>
      {isModalOpen && (
        <section className="modal sponsor">
          <div className="modal-content">
            <button onClick={() => setIsModalOpen(false)} className="close">
              <i className="ri-close-line"></i>
            </button>
            <h2>Sponsorluk için Başvuru Formu</h2>
            <div className="form-wrapper">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ setFieldValue, values }) => (
                  <Form>
                    <div className="form-wrapper-action">
                      <label htmlFor="brandname">
                        <i className="ri-user-line"></i>
                        <Field
                          type="text"
                          name="brandname"
                          placeholder="Firma İsmi"
                        />

                        <ErrorMessage
                          name="brandname"
                          component="div"
                          className="error"
                        />
                      </label>
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
                    </div>

                    <label className="text" htmlFor="desc">
                        <Field
                          as="textarea"
                          name="desc"
                          placeholder="İşbirliği Detayları (Kısaca)"
                        />

                        <ErrorMessage
                          name="desc"
                          component="div"
                          className="error"
                        />
                      </label>

                    <label className="text" htmlFor="branddesc">
                        <Field
                          as="textarea"
                          name="branddesc"
                          placeholder="Firma Hakkında Bilgi (Kısaca)"
                        />

                        <ErrorMessage
                          name="branddesc"
                          component="div"
                          className="error"
                        />
                      </label>

                    <button type="submit" disabled={isSubmitting}>Başvurumu Gönder</button>
                    {isSubmitting && (
                    <div className="spinner">
                      <i className="ri-loader-fill" />
                    </div>
                  )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Sponsors;
