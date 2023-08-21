import { Container, Form } from "react-bootstrap";
import BtnLogin from "../Buttons/BtnLogin";
import { BoxStyle, InputStyle } from "./FormStyle";



import axios from "axios";
import { useState } from "react";

// 회원가입 선택 시
function SignIn(props){

  //////////////////////////////////////////////
  /*          axios 통신 테스트 부분          */

  const [profile, setProfile] = useState({
    email : "", 
    username : "", 
    password1 : "", 
    password2 : ""
  });

  // 입력한 값을 post로 전송함
  // jsonplaceholder에 전송 성공까지만 확인됨
  function PostFunc( profile ){
    return(
      axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        email : profile.email, 
        username : profile.username, 
        password1 : profile.password1, 
        password2 : profile.password2
      })

      // 전송 성공 시
      .then(function (response) {
        console.log(response);
      })

      // 전송 실패시 
      .catch(function (error) {
        console.log("실패");
      })
    )
  }

  /**
 * < SignIn >
 * Form.Group ( 이메일, 이름, 비밀번호, 비밀번호 확인 )
 */
  return(
    <Container className="w-50 my-5 py-5" style={{maxWidth : "600px"}}>
      <Form className="d-flex-column">

        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>이메일 주소</Form.Label>
          <BoxStyle>
            <InputStyle type="email" placeholder="Enter your Email Address" 
              onChange={(e) => setProfile({...profile, email: e.target.value})}/>
          </BoxStyle>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formUserName">
          <Form.Label>사용자 이름</Form.Label>
          <BoxStyle>
            <InputStyle type="text" placeholder="Enter your User Name" 
              onChange={(e) => setProfile({...profile, username: e.target.value})}/>
          </BoxStyle>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>비밀번호</Form.Label>
          <BoxStyle>
            <InputStyle type="password" placeholder="Enter Your Password"
              onChange={(e) => setProfile({...profile, password1: e.target.value})}/>
            <i className="fa-solid fa-eye-slash"></i>
          </BoxStyle>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPasswordCheck">
          <Form.Label>비밀번호 확인</Form.Label>
          <BoxStyle>
            <InputStyle type="password" placeholder="Enter Your Password"
              onChange={(e) => setProfile({...profile, password2: e.target.value})}/>
            <i className="fa-solid fa-eye-slash"></i>
          </BoxStyle>
        </Form.Group>

        <BtnLogin  type="submit" className="float-clear" onClick={()=>PostFunc(profile)}>가입하기
        </BtnLogin>
      </Form>
    </Container>
  )
};

export default SignIn;