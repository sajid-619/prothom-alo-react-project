import React from "react";
import "../styles/pages/home.scss";
import { AdsTwo } from "../components/Ads";
import HomeContentLeft from "../components/HomeContentLeft";
import HomeContentRight from "../components/HomeContentRight";

export default function Home() {
  return (
    <main className="app_home">
      <div className="app_home__content">
        <HomeContentLeft />
        <HomeContentRight />
      </div>
      <AdsTwo />
    </main>
  );
}
