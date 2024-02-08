"use client";
import React from 'react';

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  const questionClass = isOpen ? "faq-question active" : "faq-question";

  return (
    <div className="faq-item">
      <div className={questionClass} onClick={onClick}>
        {question}
        {isOpen ? (
          <i className="ri-indeterminate-circle-fill"></i>
        ) : (
          <i className="ri-add-circle-fill"></i>
        )}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FAQItem;