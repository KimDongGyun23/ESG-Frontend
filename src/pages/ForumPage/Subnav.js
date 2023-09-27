import * as S from "../../styles/ForumPage/Subnav.style"
import { useState } from "react";

// 포럼 페이지 메인 컨텐츠의 상단 nav 요소
function Subnav(){
  const [currentBtn, setCurrentBtn] = useState(0);

  const tagBtn = [
    { name : "fa-regular fa-clock", str : "New" },
    { name : "fa-solid fa-fire", str : "Hot" },
    { name : "fa-regular fa-circle-check", str : "Open" },
    { name : "fa-regular fa-circle-check", str : "Closed" }, 
  ]

  return(
    <S.Container>
      <div>
        {
          tagBtn.map( (element, index) => (
            <S.BtnTag 
              key={index}
              className={index === currentBtn ? "focused" : ""}
              onClick={ () => setCurrentBtn(index) }
            >
              <i className={element.name}/> {element.str}
            </S.BtnTag>
          ) )
        }
      </div>

      <S.Form>
        <S.BtnSearch><i className="fa-solid fa-magnifying-glass" /></S.BtnSearch>
        <S.Input type="text" placeholder="검색어를 입력하세요"/>
      </S.Form>
    </S.Container>
  )
};

export default Subnav;