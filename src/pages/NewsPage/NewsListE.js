import NewsItem from "./NewsItem";
import Loading from "../../components/Layouts/Loading";
import { styled } from "styled-components";
import React, { useEffect, useState } from "react";
import Pagination from "../../components/Layouts/Pagination";

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

const NewsListE = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = require("../../assets/ESG환경_naver_news.json");
        setArticles(response);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 페이지 이동 함수
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(articles.length / articlesPerPage)}
        onPageChange={handlePageChange}
      />
    </NewsListBlock>
  );
};

export default NewsListE;
