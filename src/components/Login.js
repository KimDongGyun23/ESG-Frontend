import { Container, Form } from "react-bootstrap";
import { styled } from "styled-components";
import BtnRegister from "./BtnRegister";


const FormStyle = styled(Form.Control)`
  border-radius :30px;
  border : 1px solid rgb(148, 90, 21);
  padding : 15px 30px;
`;

// 로그인 페이지에서 로그인 선택 시
function Login(){
  return(
    <Container className="w-50 my-5 py-5">
      <Form className="d-flex-column">
        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>이메일 주소</Form.Label>
          <FormStyle type="email" placeholder="Enter your Email Address" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>비밀번호</Form.Label>
          <FormStyle type="password" placeholder="Enter Your Password" />
        </Form.Group>

        <BtnRegister  type="submit" className="float-clear">
          Register
        </BtnRegister>
      </Form>
    </Container>
  )
};

export default Login;