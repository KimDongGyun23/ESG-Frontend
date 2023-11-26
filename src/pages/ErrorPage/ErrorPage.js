import * as S from "../../styles/ErrorPage/ErrorPage.style";
import BtnMove from "../../components/Buttons/BtnMove";
import errorimg from "../../assets/images/errorpage.png";

/**
 * < 404 Error 페이지 >
 * 에러 메세지와 이미지 출력
 * 버튼 클릭 시. 홈으로 이동
 */
function ErrorPage() {
  return (
    <S.Container>
      <div>
        <S.TextBox>
          <h2>404</h2>
          <p>
            죄송하지만
            <br />
            요청하신 페이지를 찾을 수 없습니다 :(
          </p>
        </S.TextBox>
        <BtnMove str="Back To Home" to="/" />
      </div>

      <div>
        <img className="w-100" src={errorimg} alt="error-img" />
      </div>
    </S.Container>
  );
}

export default ErrorPage;
