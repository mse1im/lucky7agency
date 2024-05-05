"use client";
import { useState } from "react";
import "./Header.scss";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";  // usePathname hook'unu import edin

const Container = React.lazy(() => import("../container/Container"));

const Nav: React.FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav>
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
              className={pathname === item.href ? "active" : ""}
              onClick={() => setIsMenuActive(false)}
            >
              <Link href={item.href}>{item.displayName}</Link>
            </li>
          ))}
        </Container>
      </ul>
      <ul className="desktop">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={pathname === item.href ? "active" : ""}
            onClick={() => setIsMenuActive(false)}
          >
            <Link href={item.href}>{item.displayName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
