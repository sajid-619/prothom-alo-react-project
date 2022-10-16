import React, { useState } from "react";
import Nav from "./Nav";
import DATA from "../data/data.json";
import { NewsCardTitle } from "./NewsCards";
import { AdsOne } from "./Ads";

export default function HomeContentLeft() {
  const [nav, setNav] = useState("latest");

  const NewsData = DATA[nav].items.sort((a, b) => a.sort - b.sort);
  return (
    <section className="app_home__content_left">
      <Nav nav={nav} setNav={setNav} />
      <div className="app_home__content_left_newContainer">
        {React.Children.toArray(
          NewsData.map((data, index) => (
            <NewsCardTitle
              headline={data.headline}
              index={index}
              subheadline={data.subheadline}
            />
          ))
        )}
      </div>
      <div className="app_home__content_left_adv">
        <AdsOne />
      </div>
    </section>
  );
}
