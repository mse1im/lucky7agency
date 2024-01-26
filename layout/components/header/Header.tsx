import { useTheme } from "@/layout/context/Theme";
import whiteLogo from "../../../public/L7AgencySiyah2.png";
import darkLogo from "../../../public/L7AgencyBeyaz2.png";
import { useRouter } from "next/navigation";
import Container from "../container/Container";
import "./Header.scss";
import Nav from "./Nav";
import Image from "next/image";

const Header: React.FC<IHeaderProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const logo = theme === "light" ? whiteLogo : darkLogo;
  const navigate = useRouter();
  const goToHome = () => {
    navigate.push("/");
  };
  return (
    <header>
      <Container>
        <Image
          src={logo}
          alt="Lucky 7 Agency"
          width={200}
          height={55}
          onClick={goToHome}
        />
        <Nav />
        <div className="sub-menu">
          <a href="/">bize ulaşın</a>
          <button onClick={toggleTheme}><i className="ri-arrow-right-up-line"></i> Tema Değiştir</button>
        </div>
      </Container>
    </header>
  );
};
export default Header;
