import { Container, Form } from "react-bootstrap";
import BtnLogin from "../Buttons/BtnLogin";
import { BoxStyle, InputStyle } from "./FormStyle";

// 로그인 페이지에서 회원가입 선택 시
function SignIn(props){
  return(
    <Container className="w-50 my-5 py-5" style={{maxWidth : "600px"}}>
      <Form className="d-flex-column">
        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>이메일 주소</Form.Label>
          <BoxStyle>
            <InputStyle type="email" placeholder="Enter your Email Address" />
          </BoxStyle>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formUserName">
          <Form.Label>사용자 이름</Form.Label>
          <BoxStyle>
            <InputStyle type="text" placeholder="Enter your User Name" />
          </BoxStyle>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>비밀번호</Form.Label>
          <BoxStyle>
            <InputStyle type="password" placeholder="Enter Your Password" />
            <i className="fa-solid fa-eye-slash"></i>
          </BoxStyle>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPasswordCheck">
          <Form.Label>비밀번호 확인</Form.Label>
          <BoxStyle>
            <InputStyle type="password" placeholder="Enter Your Password" />
            <i className="fa-solid fa-eye-slash"></i>
          </BoxStyle>
        </Form.Group>

        <BtnLogin  type="submit" className="float-clear">
          가입하기
        </BtnLogin>
      </Form>
    </Container>
  )
};

export default SignIn;