import "./styles/global.scss";
import Header from "@/layout/components/header/Header";
import Footer from "@/layout/components/footer/Footer";
import BackToTop from "@/layout/components/backtotop/BackToTop";
import "remixicon/fonts/remixicon.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body data-theme="dark">
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
