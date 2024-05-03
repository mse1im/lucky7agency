"use client"
import React, { createContext, ReactNode, useContext } from "react";
import i18n from "../i18n/config";

interface LanguageContextType {
  language: string;
}

const LanguageContext = createContext<LanguageContextType>({ language: "tr" });

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const language = i18n.language;

  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
};