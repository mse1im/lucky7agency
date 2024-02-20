import "./styles/global.scss";
import "remixicon/fonts/remixicon.css";
import React from "react";

const Footer = React.lazy(() => import("@/layout/components/footer/Footer"));
const BackToTop = React.lazy(() => import("@/layout/components/backtotop/BackToTop"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body data-theme="dark">
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
