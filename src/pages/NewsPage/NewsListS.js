import NewsItem from "./NewsItem";
import Loading from "../../components/Layouts/Loading";
import React, { useEffect, useState } from "react";
import Pagination from "../../components/Buttons/Pagination";
import * as S from "../../styles/News/NewsList-style";
import SearchBar from "../../components/Form/SearchBar";

const NewsListS = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const articlesPerPage = 5;

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = require("../../assets/ESG사회_naver_news.json");
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

  const filteredArticles = articles.filter((article) => {
    const title = article.title ? article.title.toLowerCase() : "";
    const content = article.content ? article.content.toLowerCase() : "";
    const lowerCaseSearchKeyword = searchKeyword.toLowerCase();

    return (
      title.includes(lowerCaseSearchKeyword) ||
      content.includes(lowerCaseSearchKeyword)
    );
  });

  const filteredCurrentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // articles 값이 유효할 때
  return (
    <S.NewsListBlock>
      <SearchBar
        value={searchKeyword}
        onChange={(value) => setSearchKeyword(value)}
      />
      {filteredCurrentArticles.map((article) => (
        <NewsItem key={article.link} article={article} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredArticles.length / articlesPerPage)}
        onPageChange={handlePageChange}
      />
    </S.NewsListBlock>
  );
};

export default NewsListS;
