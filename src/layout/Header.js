import React from "react";
import "../styles/layout/header.scss";

export default function Header() {
  return (
    <header className="app_header">
      <img
        src="/palo-logo.svg"
        alt="prothom alo logo"
        onClick={() => window.open("/", "_self")}
      />
    </header>
  );
}
