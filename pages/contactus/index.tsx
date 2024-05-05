import dynamic from "next/dynamic";
import { menuItems } from "@/layout/json/menu";
import Head from "next/head";
import Form from "@/layout/components/form/Form";

const Header = dynamic(() => import("@/layout/components/header/Header"));
const Container = dynamic(
  () => import("@/layout/components/container/Container")
);
const Footer = dynamic(() => import("@/layout/components/footer/Footer"));

export default function Page() {
  return (
    <>
      <Head>
        <title>Lucky 7 Agency - İletişim</title>
        <meta name="description" content="İletişim" />
        <meta name="keywords" content="İletişim" />
      </Head>
      <Header menuItems={menuItems} />
      <Form />
      <Footer />
    </>
  );
}
