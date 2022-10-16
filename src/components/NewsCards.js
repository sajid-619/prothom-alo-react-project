import React from "react";
import "../styles/components/newsCards.scss";
import { Link } from "react-router-dom";

export function NewsCardTitle({ headline, subheadline, index }) {
  return (
    <Link to={`/news/${headline}`} className="newsCard_Title">
      <h1>{(index + 1).toLocaleString("bn")}</h1>
      <p>
        {subheadline && (
          <>
            <span>{subheadline}</span> <>/</>
          </>
        )}{" "}
        {headline}
      </p>
    </Link>
  );
}

export function NewsCardCover({ headline, subHeadline, coverPhoto }) {
  return (
    <div className="newsCard_cover">
      {coverPhoto && <img src={coverPhoto} alt={headline} />}
      <Link to={`/news/${headline}`} className="newsCard_cover__content">
        <p>
          {subHeadline && (
            <>
              <span>{subHeadline}</span> <>/</>
            </>
          )}{" "}
          {headline}
        </p>
      </Link>
    </div>
  );
}

export function NewsCardSmall({
  headline,
  subHeadline,
  coverPhoto,
  time = "১ ঘণ্টা আগে",
  type = "row",
  bl = false,
}) {
  return (
    <Link
      to={`/news/${headline}`}
      className={`newsCard_Small ${type} ${bl ? "borderLeft" : ""}`}
    >
      {coverPhoto && (
        <div className="newsCard_Small__image">
          <img src={coverPhoto} alt={headline} />
        </div>
      )}
      <div className="newsCard_Small__content">
        <p>
          {subHeadline && (
            <>
              <span>{subHeadline}</span> <>/</>
            </>
          )}{" "}
          {headline}
        </p>
        <p className="ago">{time}</p>
      </div>
    </Link>
  );
}
