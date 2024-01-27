import { useTheme } from "@/layout/context/Theme";
import whiteLogo from "../../../public/L7AgencySiyah3.png";
import darkLogo from "../../../public/L7AgencyBeyaz3.png";
import { useRouter } from "next/navigation";
import Container from "../container/Container";
import "./Header.scss";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import Shadow from "./shadow/Shadow";

const Header: React.FC<IHeaderProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const logo = theme === "light" ? whiteLogo : darkLogo;
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
            src={logo}
            alt="Lucky 7 Agency"
            width={306}
            height={43}
            onClick={goToHome}
          />
          <Nav />
          <div className="sub-menu">
            <button onClick={toggleTheme}>
              <i className="ri-sun-fill"></i>
              <span
                className={theme === "light" ? "toggle-left" : "toggle-right"}
              ></span>
              <i className="ri-moon-fill"></i>
            </button>
            <a href="/">
              <i className="ri-customer-service-2-fill"></i> bize ulaşın
            </a>
          </div>
        </Container>
      </header>
      <Shadow />
    </>
  );
};
export default Header;
