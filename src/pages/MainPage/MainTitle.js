import * as S from "../../styles/MainPage/MainTitle.style"

// 메인 Title
function MainTitle(){
  return(
    <S.TitleContainer>
      <S.BackBox />
      <S.TextBox>
        <p>ESG는 Environmental(환경), Social(사회), Governance(지배구조)의 영문 첫글자를 조합한 단어입니다.</p>
        <p>ESG는 기업이 '지속가능한' 비즈니스를 달성하기 위한 세 가지 핵심 요소이며 최근 기업의 중장기적 발전을 위한 핵심 비재무적 요소로 떠오르고 있습니다.</p>
      </S.TextBox>
    </S.TitleContainer>
  )
};

export default MainTitle;