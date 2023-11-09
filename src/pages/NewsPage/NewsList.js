import NewsItem from "./NewsItem";
import axios from "axios";
import Loading from "../../components/Layouts/Loading";
import { styled } from "styled-components";
import React, { useEffect, useState } from "react";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
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

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=%ED%99%98%EA%B2%BD&apiKey=2f6b5c1ecba342de88a969b280b7363c"
        );
        setArticles(response.data.articles);
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
        <NewsItem key={article.url} article={article} />
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

export default NewsList;
