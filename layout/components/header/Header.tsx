"use client";
import { useRouter } from "next/navigation";
import "./Header.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";

const Container = React.lazy(
  () => import("@/layout/components/container/Container")
);

const Nav = React.lazy(() => import("./Nav"));
const Shadow = React.lazy(() => import("./shadow/Shadow"));

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
            src="/L7AgencyBeyaz3.png"
            alt="Lucky 7 Agency"
            width={306}
            height={43}
            onClick={goToHome}
            priority
          />
          <Nav menuItems={menuItems || []} />
          <div className="sub-menu">
            <a
              href="https://wa.me/908503071270"
              rel="nofollow"
              target="_blank"
              className="call-us"
            >
              <i className="ri-customer-service-2-fill"></i>{" "}
              <span>BİZE ULAŞIN</span>
            </a>
            <a
              href="https://wa.me/908503071270"
              rel="nofollow"
              target="_blank"
              className="call-us-mobile"
            >
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
