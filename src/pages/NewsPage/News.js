import React from "react";
import Banner from "../../components/Layouts/Banner";
import NewsList from "./NewsList";
// 일단 사이드바 없음

function News() {
  return (
    <>
      <Banner title="ESG News" subtitle="ESG 뉴스" />
      <NewsList />
    </>
  );
}

export default News;
