import React from "react";
import "./page.css";

const fetchProducts = () => {
  return fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=f6254fae3e7f47e3a386a99522ab1a5c"
  )
    .then((response) => response.json())
    .then((data) => data);
};

const page = async () => {
  const { articles } = await fetchProducts();
  return (
    <div className="news-container">
      {articles.map((info) => (
        <div className="news-card">
          <a href={info.url} target="_blank">
            {info.urlToImage ? (
              <img src={info.urlToImage} alt="" className="news-img" />
            ) : (
              <img
                src="https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq"
                alt=""
                className="news-img"
              />
            )}
          </a>
          <div className="news-details">
            <h2 className="news-title">{info.title}</h2>
            <p className="news-description">{info.description}</p>
            <span className="news-date">{info.publishedAt}</span>
            <a href={info.url} target="_blank" className="news-more">
              Show more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
