import dynamic from "next/dynamic";
import { menuItems } from "@/layout/json/menu";
import { Metadata } from "next";

const Header = dynamic(() => import("@/layout/components/header/Header"));
const Container = dynamic(
  () => import("@/layout/components/container/Container")
);
const Footer = dynamic(() => import("@/layout/components/footer/Footer"));

export const metadata: Metadata = {
  title: "Lucky 7 Agency - Hizmetlerimiz",
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png'],
  },
  keywords:`hizmetlerimiz`,
  description:`hizmetlerimiz`
};

export default function Page() {

  return (
    <>
      <Header menuItems={menuItems} />
      <Container>
        deneme
      </Container>
      <Footer />
    </>
  );
}
