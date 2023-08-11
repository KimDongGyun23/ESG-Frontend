import { styled } from "styled-components";
import { Container } from "react-bootstrap";
import errorimg from '../../img/errorpage.png';
import BtnMove from "../Buttons/BtnMove"

// Text 박스
const TextBox = styled.div`
  width : 30%;
  margin-left : auto;
  margin-right : 50px;
`;

// 이미지 박스
const ImgBox = styled.div`
  width : 50%;
  height : 500px;
  // height : 100%;
  background-image : url(${errorimg});
  background-size : cover;
  border-radius : 0 0 0 100px;
`;

// 텍스트 스타일 
const ErrorText = styled.h1`
  font-size : 100px;
  margin-bottom : 16px;
`;

/**
 * < 404 Error 페이지 >
 * 에러 메세지와 이미지 출력
 * 버튼 클릭 시. 홈으로 이동
 */
function ErrorPage(){
  return(
    <>
      <Container className="d-flex align-items-center">
        <TextBox>
          <ErrorText>404</ErrorText>
          <p className="fs-4 mb-2">죄송하지만</p>
          <p className="fs-4 mb-4">요청하신 페이지를 찾을 수 없습니다 :(</p>
          <BtnMove str="Back To Home" to="/"/>
        </TextBox>
        <ImgBox />
      </Container>
    </>
  )
};

export default ErrorPage;