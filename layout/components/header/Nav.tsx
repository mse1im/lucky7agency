"use client";
import { useState } from "react";
import "./Header.scss";
import React from "react";
import Link from "next/link";

const Container = React.lazy(() => import("../container/Container"));

const Nav: React.FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("anasayfa");

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
          {menuItems?.map((item) => (
            <li
              key={item.name}
              className={activeMenuItem === item.name ? "active" : ""}
              onClick={() => handleMenuItemClick(item.name)}
            >
              <Link href={item.href}>{item.displayName}</Link>
            </li>
          ))}
        </Container>
      </ul>
      </>
      <ul className="desktop">
        {menuItems?.map((item) => (
          <li
            key={item.name}
            className={activeMenuItem === item.name ? "active" : ""}
            onClick={() => handleMenuItemClick(item.name)}
          >
            <Link href={item.href}>{item.displayName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
