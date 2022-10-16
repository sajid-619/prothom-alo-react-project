import React from "react";
import "../styles/components/button.scss";

export default function Button({ text, href, target, setNav, active }) {
  const handleClick = () => {
    if (typeof href === "string" || href instanceof String) {
      window.open(
        href,
        target === "_self" ||
          target === "__blank" ||
          target === "_parent" ||
          target === "_top"
          ? target
          : "_self"
      );
    } else {
      setNav && href(setNav);
    }
  };
  return (
    <button
      className={`Unique_Button ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
