import { Container, Form } from "react-bootstrap";
import BtnLogin from "../Buttons/BtnLogin";
import { BoxStyle, InputStyle } from "./FormStyle";
import axios from "axios";

import { useEffect, useState } from "react";

// 로그인 페이지에서 로그인 선택 시
function Login(){

  // 입력한 id와 비밀번호 가져올 state
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");


  // useEffect 사용하여 아이디, 비밀번호 정보 가져오기
  const [loginData, SetLoginData] = useState([]);

  useEffect(() => {
    axios
      .get("https://1914ac58-762c-4c6b-be98-a0a1482b45de.mock.pstmn.io/login")
      .then((result) => {
        console.log(result.data);
        SetLoginData(result.data);
      })
      .catch(() => {console.log("가져오기 실패");});
  }, []);

  // id와 password 올바른지 확인
  const LoginFunc = () => {
    const user = loginData.filter((user)=>{
      return user.id === id;
    });

    if (user.length === 0){
      alert("ID를 확인하세요.");
      return;
    }

    if ( !( user[0].password === password ) ){
      alert("Password를 확인하세요.");
      return;
    }

    alert("로그인 성공");
  }

  return(
    <Container className="my-5 py-5" style={{maxWidth : "600px"}}>
      <Form className="d-flex-column">
        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>이메일 주소</Form.Label>
          <BoxStyle>
            <InputStyle type="email" placeholder="Enter your Email Address" onChange={(e) => setId(e.target.value)} />
          </BoxStyle>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>비밀번호</Form.Label>
          <BoxStyle>
            <InputStyle type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)}/>
          </BoxStyle>
        </Form.Group>

        <BtnLogin type="submit" className="float-clear" onClick={LoginFunc}>
          로그인
        </BtnLogin>
      </Form>
    </Container>
  )
};

export default Login;