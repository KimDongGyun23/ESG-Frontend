import { Container, Form } from "react-bootstrap";
import BtnLogin from "../Buttons/BtnLogin";
import { BoxStyle, InputStyle } from "./FormStyle";

// 로그인 페이지에서 로그인 선택 시
function Login(){
  return(
    <Container className="my-5 py-5" style={{maxWidth : "600px"}}>
      <Form className="d-flex-column">
        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>이메일 주소</Form.Label>
          <BoxStyle>
            <InputStyle type="email" placeholder="Enter your Email Address" />
          </BoxStyle>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>비밀번호</Form.Label>
          <BoxStyle>
            <InputStyle type="password" placeholder="Enter Your Password" />
          </BoxStyle>
        </Form.Group>

        <BtnLogin type="submit" className="float-clear">
          로그인
        </BtnLogin>
      </Form>
    </Container>
  )
};

export default Login;