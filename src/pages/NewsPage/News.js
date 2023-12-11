import { useState } from "react";
import Banner from "../../components/Layouts/Banner";
import * as S from "../../styles/ForumPage/ForumPage.style";
import SideMain from "../../components/Layouts/SideMain";
import { Link } from "react-router-dom";

function News() {
  // 사이드바 클릭 이벤트 처리 변수
  const [currentTab, setCurrentTab] = useState(0);
  const interest = localStorage.getItem("interest");
  let nickname = localStorage.getItem("nickname");
  if (nickname === null) {
    nickname = "";
  }

  let subnav = [];
  if (interest === null) {
    subnav = [
      { name: "  님을 위한 추천 뉴스", url: "/esg/notUser" },
      { name: "찜한 뉴스", url: "/esg/like" },
      { name: "E 환경 뉴스", url: "/esg/e" },
      { name: "S 사회 뉴스", url: "/esg/s" },
      { name: "G 지배구조 뉴스", url: "/esg/g" },
      { name: "핵심 키워드", url: "/esg/keyword" },
    ];
  } else if (interest === "E") {
    subnav = [
      { name: `${nickname}님을 위한 뉴스`, url: "/esg/e" },
      { name: "찜한 뉴스", url: "/esg/like" },
      { name: `E 환경 뉴스`, url: "/esg/e" },
      { name: "S 사회 뉴스", url: "/esg/s" },
      { name: "G 지배구조 뉴스", url: "/esg/g" },
      { name: "핵심 키워드", url: "/esg/keyword" },
    ];
  } else if (interest === "S") {
    subnav = [
      { name: `${nickname}님을 위한 추천 뉴스`, url: "/esg/s" },
      { name: "찜한 뉴스", url: "/esg/like" },
      { name: "E 환경 뉴스", url: "/esg/e" },
      { name: "S 사회 뉴스", url: "/esg/s" },
      { name: "G 지배구조 뉴스", url: "/esg/g" },
      { name: "핵심 키워드", url: "/esg/keyword" },
    ];
  } else if (interest === "G") {
    subnav = [
      { name: `${nickname}님을 위한 추천 뉴스`, url: "/esg/g" },
      { name: "찜한 뉴스", url: "/esg/like" },
      { name: "E 환경 뉴스", url: "/esg/e" },
      { name: "S 사회 뉴스", url: "/esg/s" },
      { name: "G 지배구조 뉴스", url: "/esg/g" },
      { name: "핵심 키워드", url: "/esg/keyword" },
    ];
  }

  return (
    <>
      <Banner
        title={
          currentTab === subnav.findIndex((item) => item.url === "/esg/keyword")
            ? "핵심 키워드"
            : currentTab ===
              subnav.findIndex((item) => item.url === "/esg/like")
            ? "찜한 뉴스"
            : currentTab ===
              subnav.findIndex((item) => item.url === "/esg/notUser")
            ? ""
            : "ESG 뉴스"
        }
        subtitle={
          currentTab === subnav.findIndex((item) => item.url === "/esg/keyword")
            ? "환경 / 사회 / 지배구조"
            : currentTab ===
              subnav.findIndex((item) => item.url === "/esg/notUser")
            ? ""
            : currentTab ===
              subnav.findIndex((item) => item.url === "/esg/like")
            ? "찜한 뉴스입니다."
            : "파란색 제목을 누르면 해당 뉴스로 이동합니다!"
        }
      />

      <SideMain>
        {subnav.map((element, index) => (
          <S.List key={index} className={index === currentTab ? "focused" : ""}>
            <Link to={element.url} onClick={() => setCurrentTab(index)}>
              {index === 1 ? (
                <i className="fa-solid fa-heart-circle-plus fa-lg" />
              ) : index === 0 || index === subnav.length - 1 ? (
                <i className="fa-solid fa-star fa-lg" />
              ) : (
                <i className="fa-solid fa-tag fa-lg" />
              )}{" "}
              {element.name}
            </Link>
          </S.List>
        ))}
      </SideMain>
    </>
  );
}

export default News;
