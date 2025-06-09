// components/layout/Header.tsx

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header
      style={{
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <nav style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <Link href="/">Home</Link>
        <Link href="/home">/home</Link>
        <Link href="/about">/about</Link>
      </nav>
    </header>
  );
};

export default Header;
