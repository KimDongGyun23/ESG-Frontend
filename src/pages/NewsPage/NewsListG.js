import NewsItem from "./NewsItem";
import Loading from "../../components/Layouts/Loading";
import { styled } from "styled-components";
import React, { useEffect, useState } from "react";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Pagination = styled.div`
  display: flex;
  margin-top: 2rem;
  color: #0291db;
  .page-btn {
    font-size: 1.2rem;
    margin: 0 0.5rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const NewsListG = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = require("../../assets/ESG지배구조_naver_news.json");
        setArticles(response);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // page 나누기
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(articles.length / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  // 대기 중일 때
  if (loading) {
    return <Loading />;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles || articles.length === 0) {
    return <div> 내용을 조금만 기다려주세요!</div>;
  }

  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {currentArticles.map((article) => (
        <NewsItem key={article.link} article={article} />
      ))}
      <Pagination>
        {pageNumbers.map((number) => (
          <div
            key={number}
            className="page-btn"
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </div>
        ))}
      </Pagination>
    </NewsListBlock>
  );
};

export default NewsListG;
