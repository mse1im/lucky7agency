"use client";
import { useState } from "react";
import React from "react";
import { useTranslation } from "next-i18next";

const Language: React.FC<IHeaderProps> = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeLanguage = (lang: any) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  const languages = {
    en: "EN",
    tr: "TR",
  };

  return (
    <div className="language-selector">
      <button onClick={toggleDropdown} aria-label="Change Language">
        {languages[i18n.language as keyof typeof languages]}
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu">
          {Object.entries(languages)
            .filter(([key]) => key !== i18n.language)
            .map(([key, label]) => (
              <button
                key={key}
                onClick={() => changeLanguage(key as keyof typeof languages)}
                className="dropdown-item"
              >
                {label}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};
export default Language;
