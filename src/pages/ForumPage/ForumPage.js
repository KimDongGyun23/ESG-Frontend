import { useState } from "react";
import SideMain from "../../components/Layouts/SideMain";
import * as S from "../../styles/ForumPage/ForumPage.style";
import { BannerImg } from "../../styles/Layouts/Banner.style";
import { Link } from "react-router-dom";

function ForumPage() {
  // 사이드바 클릭 이벤트 처리 변수
  const [currentTab, setCurrentTab] = useState(0);

  const subnav = [
    { name: "Questions", url: "/forum/questions" },
    { name: "E (Environment)", url: "/forum/environment" },
    { name: "S (Social)", url: "/forum/social" },
    { name: "G (Governance)", url: "/forum/governance" },
    { name: "Tags", url: "/forum/tags" },
  ];

  // 클릭한 요소에 focused 클래스를 부여하여 이벤츠 처리
  return (
    <>
      <BannerImg />
      <SideMain>
        {subnav.map((element, index) => (
          <S.List key={index} className={index === currentTab ? "focused" : ""}>
            <Link to={element.url} onClick={() => setCurrentTab(index)}>
              <i className="fa-solid fa-tag" /> {element.name}
            </Link>
          </S.List>
        ))}
      </SideMain>
    </>
  );
}

export default ForumPage;
