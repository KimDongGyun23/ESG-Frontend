import { useState } from "react";
import Banner from "../../components/Layouts/Banner";
import * as S from "../../styles/ForumPage/ForumPage.style";
import SideMain from "../../components/Layouts/SideMain";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SocialNews from "./SocialNews";
import EnvironmentNews from "./EnvironmentNews";
import GovernanceNews from "./GovernanceNews";

function News() {
  // 사이드바 클릭 이벤트 처리 변수
  const [currentTab, setCurrentTab] = useState(0);

  const subnav = [
    { name: "환경 뉴스", url: "/esg/e" },
    { name: "사회 뉴스", url: "/esg/s" },
    { name: "지배구조 뉴스", url: "/esg/g" },
  ];

  return (
    <>
      <Banner title="ESG News" subtitle="ESG 뉴스" />
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
