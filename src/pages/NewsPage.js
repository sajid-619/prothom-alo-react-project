import React from "react";
import "../styles/pages/news.scss";
import DATA from "../data/data.json";
import { useParams } from "react-router-dom";
import ProcessData from "../utils/ProcessData";
import { Helmet } from "react-helmet";

export default function NewsPage() {
  const { id } = useParams();
  const NewsData = ProcessData(DATA);
  const News = NewsData.filter((news) => news.headline === id);

  console.log(News[0].descriptions.replace("<p>", "").substr(0, 70) + "...");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`${News[0].descriptions
            .replace("<p>", "")
            .substr(0, 70)}...`}
        />
        <title>{News[0].headline}</title>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <main className="app_news">
        <h1 className="app_news__subTitle">{News[0].subheadline}</h1>
        <h2 className="app_news__title">{News[0].headline}</h2>
        <div className="app_news__image">
          {News[0]["cover-photo"] !== "" && (
            <img src={News[0]["cover-photo"]} alt={News[0].headline} />
          )}
        </div>
        <div className="app_news__content">
          <div
            className="app_news__content_news"
            dangerouslySetInnerHTML={{ __html: News[0].descriptions }}
          ></div>
        </div>
      </main>
    </>
  );
}
