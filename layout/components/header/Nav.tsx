import "./Header.scss";

const Nav: React.FC<IHeaderProps> = () => {
  return (
    <nav>
        <ul>
            <li className="active"><a href="/">anasayfa</a></li>
            <li><a href="#services">hizmetlerimiz</a></li>
            <li><a href="#streamers">ekibimiz</a></li>
            <li><a href="#aboutus">hakkimizda</a></li>
            <li><a href="#form">iletisim</a></li>
        </ul>
    </nav>
  );
};
export default Nav;
