import { Link } from "react-router-dom";
import { BannerImg } from "../../styles/Layouts/Banner.style";
import * as S from "../../styles/LearningPage/LearningPage.style";
import { useState } from "react";
import SideMain from "../../components/Layouts/SideMain";

function LearningPage() {
  // 사이드바 클릭 이벤트 처리 변수
  const [currentTab, setCurrentTab] = useState(0);
  const subnav = [
    { name: "ESG 개념", url: "/learning/concept" },
    { name: "ESG 중요성", url: "/learning/importance" },
    { name: "ESG 퀴즈", url: "/learning/quiz" },
  ];

  const indexHandler = (index) => setCurrentTab(index);

  // 클릭한 요소에 focused 클래스를 부여하여 이벤츠 처리
  return (
    <>
      <BannerImg />
      <SideMain>
        {subnav.map((element, index) => (
          <S.List key={index} className={index === currentTab ? "focused" : ""}>
            <Link to={element.url} onClick={() => indexHandler(index)}>
              {index === 2 ? (
                <i className="fa-solid fa-q fa-lg" />
              ) : (
                <i className="fa-solid fa-list-ul fa-lg" />
              )}{" "}
              {element.name}
            </Link>
          </S.List>
        ))}
      </SideMain>
    </>
  );
}

export default LearningPage;
