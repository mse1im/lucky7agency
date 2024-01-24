"use client";
import Header from "@/layout/components/header/Header";
import Container from "@/layout/components/container/Container";
import { ThemeContext } from "@/layout/context/Theme";
import { useContext } from "react";

const Homepage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <body className={`${theme}-theme`}>
      <Header />
      <Container>
        <>deneme</>
      </Container>
    </body>
  );
};
export default Homepage;
