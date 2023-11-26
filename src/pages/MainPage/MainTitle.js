import * as S from "../../styles/MainPage/MainTitle.style";
import BtnMove from "../../components/Buttons/BtnMove";
// 메인 Title
function MainTitle() {
  return (
    <S.TitleContainer>
      <S.BtnBox>
        <BtnMove to="/signup" str="회원가입 하러가기" />
      </S.BtnBox>
    </S.TitleContainer>
  );
}

export default MainTitle;
