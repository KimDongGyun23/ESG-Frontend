import { useState } from "react";
import { useLocation } from "react-router";
import NewsItem from "./NewsItem";
import { useLikedArticles } from "../../context/LikedArticlesContext";
const LikeNews = () => {
  const { likedArticles } = useLikedArticles();
  return (
    <>
      {likedArticles.map((article) => (
        <div key={article.link}>
          <NewsItem article={article} />
        </div>
      ))}
    </>
  );
};

export default LikeNews;
