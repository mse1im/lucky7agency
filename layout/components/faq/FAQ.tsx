"use client";
import { useState } from "react";
import Container from "../container/Container";
import "./FAQ.scss";
import FAQItem from "./FaqItem";
import { faqData } from "@/layout/json/faq";

const Faq: React.FC<IFaqProps> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <section className="faq">
      <Container>
        <div className="title">
          <span>Lucky 7 Agency</span>
          <h2>Sıkça Sorulan Sorular</h2>
        </div>
        <div className="faq-wrapper">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Faq;
