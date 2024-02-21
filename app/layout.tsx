import "./styles/global.scss";
import "remixicon/fonts/remixicon.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body data-theme="dark">
        {children}
      </body>
    </html>
  );
}
