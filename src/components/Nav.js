import React from "react";
import Button from "./Button";

export default function Nav({ nav, setNav }) {
  const NAVs = [
    {
      title: "latest",
      name: "সর্বশেষ",
    },
    {
      title: "mostread",
      name: "পঠিত",
    },
    {
      title: "discussed",
      name: "আলোচিত",
    },
  ];

  return (
    <nav className="app_home__content_left_nav">
      {React.Children.toArray(
        NAVs.map((data) => (
          <Button
            active={data.title === nav ? true : false}
            text={data.name}
            setNav={data.title}
            href={setNav}
          />
        ))
      )}
    </nav>
  );
}
