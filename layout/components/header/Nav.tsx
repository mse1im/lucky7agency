"use client";
import { useEffect, useState } from "react";
import "./Header.scss";
import Container from "../container/Container";

const Nav: React.FC<IHeaderProps> = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("anasayfa");

  const menuItems = [
    { name: "anasayfa", href: "/", displayName: "Anasayfa" },
    { name: "services", href: "#services", displayName: "Hizmetlerimiz" },
    { name: "streamers", href: "#streamers", displayName: "Ekibimiz" },
    { name: "aboutus", href: "#aboutus", displayName: "Hakkımızda" },
    { name: "callus", href: "#callus", displayName: "İletişim" },
  ];

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleMenuItemClick = (menuItem: any) => {
    setActiveMenuItem(menuItem);
  };
  return (
    <nav>
      <>
        <div className="hamburger">
          <div
            className={`hamburger-menu ${isMenuActive ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={`mobile ${isMenuActive ? "active" : ""}`}>
          <Container>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={activeMenuItem === item.name ? "active" : ""}
                onClick={() => handleMenuItemClick(item.name)}
              >
                <a href={item.href}>{item.displayName}</a>
              </li>
            ))}
          </Container>
        </ul>
      </>
      <ul className="desktop">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={activeMenuItem === item.name ? "active" : ""}
            onClick={() => handleMenuItemClick(item.name)}
          >
            <a href={item.href}>{item.displayName}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
