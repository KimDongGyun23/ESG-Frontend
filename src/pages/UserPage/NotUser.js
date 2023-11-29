import BtnMove from "../../components/Buttons/BtnMove";
import * as S from "../../styles/News/NewsList-style";
import * as E from "../../styles/ErrorPage/ErrorPage.style";
const NotUser = () => {
  return (
    <S.NewsListBlock>
      <div>
        <E.TextBox>
          <p style={{ fontSize: "1.5rem" }}>아직 회원이 아니신가요?</p>
          <BtnMove str="회원가입 하러가기" to="/signup" />
        </E.TextBox>
        <E.TextBox>
          <p style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
            로그인을 아직 안하셨나요?
          </p>
          <BtnMove str="로그인 하러가기" to="/login" />
        </E.TextBox>
      </div>
    </S.NewsListBlock>
  );
};

export default NotUser;
