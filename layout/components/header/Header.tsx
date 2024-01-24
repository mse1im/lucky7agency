import { useTheme } from "@/layout/context/Theme";
import Container from "../container/Container";
import "./Header.scss";

const Header: React.FC<IHeaderProps> = () => {
  const { toggleTheme } = useTheme();
  return (
    <header>
      <Container>
      <button onClick={toggleTheme}>Tema Değiştir</button>
      </Container>
    </header>
  );
};
export default Header;
