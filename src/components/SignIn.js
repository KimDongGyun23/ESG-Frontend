import { Container, Form } from "react-bootstrap";
import { styled } from "styled-components";
import BtnRegister from "./BtnRegister";

// 입력창 스타일
const FormStyle = styled(Form.Control)`
  border-radius :30px;
  border : 1px solid rgb(148, 90, 21);
  padding : 15px 30px;
`;

// 로그인 페이지에서 회원가입 선택 시
function SignIn(){
  return(
    <Container className="w-50 my-5 py-5">
      <Form className="d-flex-column">
        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>이메일 주소</Form.Label>
          <FormStyle type="email" placeholder="Enter your Email Address" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formUserName">
          <Form.Label>사용자 이름</Form.Label>
          <FormStyle type="text" placeholder="Enter your User Name" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>비밀번호</Form.Label>
          <FormStyle type="password" placeholder="Enter Your Password" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPasswordCheck">
          <Form.Label>비밀번호 확인</Form.Label>
          <FormStyle type="password" placeholder="Enter Your Password" />
        </Form.Group>

        <BtnRegister  type="submit">
          Register
        </BtnRegister>
        <div style={{clear : "both"}}></div>
      </Form>
    </Container>
  )
};

export default SignIn;