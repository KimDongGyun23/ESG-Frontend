import { useState } from "react";
import Banner from "../../components/Layouts/Banner";
import * as S from "../../styles/ForumPage/ForumPage.style";
import SideMain from "../../components/Layouts/SideMain";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import SocialNews from "./SocialNews";
import EnvironmentNews from "./EnvironmentNews";
import GovernanceNews from "./GovernanceNews";

function News() {
  // 사이드바 클릭 이벤트 처리 변수
  const [currentTab, setCurrentTab] = useState(0);
  // const interest = localStorage.getItem("interest");
  const interest = "E";
  const nickname = "chae";
  //const nickname = localStorage.getItem("nickname");
  let subnav = [];
  if (interest === "E") {
    subnav = [
      { name: `${nickname}님을 위한 추천 뉴스`, url: "/esg/e" },
      { name: "사회 뉴스", url: "/esg/s" },
      { name: "지배구조 뉴스", url: "/esg/g" },
    ];
  } else if (interest === "S") {
    subnav = [
      { name: `${nickname}님을 위한 추천 뉴스`, url: "/esg/s" },
      { name: "환경 뉴스", url: "/esg/e" },
      { name: "지배구조 뉴스", url: "/esg/g" },
    ];
  } else if (interest === "G") {
    subnav = [
      { name: `${nickname}님을 위한 추천 뉴스`, url: "/esg/g" },
      { name: "환경 뉴스", url: "/esg/e" },
      { name: "사회 뉴스", url: "/esg/s" },
    ];
  }

  return (
    <>
      <Banner
        title="ESG 뉴스"
        subtitle="파란색 제목을 누르면 해당 뉴스로 이동합니다!"
      />
      <SideMain>
        {subnav.map((element, index) => (
          <S.List key={index} className={index === currentTab ? "focused" : ""}>
            <Link to={element.url} onClick={() => setCurrentTab(index)}>
              <i className="fa-solid fa-tag" /> {element.name}
            </Link>
          </S.List>
        ))}
      </SideMain>
      <Routes>
        <Route path="/esg/e" component={EnvironmentNews} />
        <Route path="/esg/s" component={SocialNews} />
        <Route path="/esg/g" component={GovernanceNews} />
      </Routes>
    </>
  );
}

export default News;
