"use client";
import darkLogo from "@/public/L7AgencyBeyaz3.png";
import { useRouter } from "next/navigation";
import Container from "../container/Container";
import "./Header.scss";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import Shadow from "./shadow/Shadow";

const Header: React.FC<IHeaderProps> = ({ menuItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useRouter();
  const goToHome = () => {
    navigate.push("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 150;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={isScrolled ? "fixed" : ""}>
        <Container>
          <Image
            src={darkLogo}
            alt="Lucky 7 Agency"
            width={306}
            height={43}
            priority
            onClick={goToHome}
          />
          <Nav menuItems={menuItems || []} />
          <div className="sub-menu">
            <a href="/" className="call-us">
              <i className="ri-customer-service-2-fill"></i> <span>bize ulaşın</span>
            </a>
            <a href="/" className="call-us-mobile">
              <i className="ri-customer-service-2-fill"></i>
            </a>
          </div>
        </Container>
      </header>
      <Shadow />
    </>
  );
};
export default Header;
