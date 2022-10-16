import React from "react";
import { NewsCardCover, NewsCardSmall } from "./NewsCards";
import DATA from "../data/data.json";
import { AdsOne } from "./Ads";

export default function HomeContentRight() {
  const NewsData = DATA.selected.items.sort((a, b) => a.sort - b.sort);
  return (
    <section className="app_home__content_right">
      <div className="app_home__content_right__covers">
        <div className="app_home__content_right__covers_title">
          <div className="app_home__content_right__covers_title__circle"></div>
          <h2>নির্বাচিত</h2>
        </div>
        <NewsCardCover
          coverPhoto={
            NewsData[0]["cover-photo"] ? NewsData[0]["cover-photo"] : undefined
          }
          headline={
            NewsData[0].headline
              ? NewsData[0].headline
              : "Backend is not providing any data"
          }
          subHeadline={NewsData[0].subheadline}
        />
        <div className="app_home__content_right__covers_twoCol">
          <NewsCardSmall
            coverPhoto={NewsData[1].thumb ? NewsData[1].thumb : undefined}
            headline={
              NewsData[1].headline
                ? NewsData[1].headline
                : "Backend is not providing any data"
            }
            subHeadline={NewsData[1].subheadline}
            time={NewsData[1].time && NewsData[1].time}
            type="column"
          />
          <NewsCardSmall
            coverPhoto={NewsData[2].thumb ? NewsData[2].thumb : undefined}
            headline={
              NewsData[2].headline
                ? NewsData[2].headline
                : "Backend is not providing any data"
            }
            subHeadline={NewsData[2].subheadline}
            time={NewsData[2].time && NewsData[2].time}
            type="column"
            bl={true}
          />
        </div>
      </div>
      <div className="app_home__content_right__side">
        <div className="app_home__content_right__side_ad">
          <AdsOne />
        </div>
        <div className="app_home__content_right__side_news">
          <NewsCardSmall
            coverPhoto={NewsData[3].thumb ? NewsData[3].thumb : undefined}
            headline={
              NewsData[3].headline
                ? NewsData[3].headline
                : "Backend is not providing any data"
            }
            subHeadline={NewsData[3].subheadline}
            time={NewsData[3].time && NewsData[3].time}
          />
          <NewsCardSmall
            coverPhoto={NewsData[4].thumb ? NewsData[4].thumb : undefined}
            headline={
              NewsData[4].headline
                ? NewsData[4].headline
                : "Backend is not providing any data"
            }
            subHeadline={NewsData[4].subheadline}
            time={NewsData[4].time && NewsData[4].time}
          />
          <NewsCardSmall
            coverPhoto={NewsData[5].thumb ? NewsData[5].thumb : undefined}
            headline={
              NewsData[5].headline
                ? NewsData[5].headline
                : "Backend is not providing any data"
            }
            subHeadline={NewsData[5].subheadline}
            time={NewsData[5].time && NewsData[5].time}
          />
        </div>
      </div>
    </section>
  );
}
