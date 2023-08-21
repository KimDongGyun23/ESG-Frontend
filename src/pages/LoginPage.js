import { useState } from "react";
import { Container } from "react-bootstrap";
import { styled } from "styled-components";
import Banner from "../components/Layouts/Banner";
import SignIn from "../components/Form/SignIn";
import Login from "../components/Form/Login";

// 로그인, 회원가입 버튼
const Btn = styled.button`
  width : 200px;
  padding: 15px;
  background-color: ${props => props.$log ? '#73BCFF' : '#BCDFFF'};
  border : none;
  border-radius : 50px;
  color: ${props => props.$log ? 'white' : 'black'};
  cursor: pointer;
  transition: all 0.2s ease;
`;

// 로그인, 회원가입 선택 버튼 배경
const LoginBox = styled.div`
  width : 450px;
  border : 15px solid #BCDFFF;
  border-radius : 50px;
  background-color: #BCDFFF;
`;

// 버튼 클릭 시, log 변경
function Selection(props){
  return(
    <>
      <Banner title="Sign up" subtitle="회원가입하기" />
      <Container className="text-center">
        <p className="mb-5">Welcome to LOVESG...!</p>
        <LoginBox className="mx-auto">
          <Btn $log={props.log} onClick={ () => props.setLog(true) }>로그인</Btn>
          <Btn $log={!props.log} onClick={ () => props.setLog(false) }>회원가입</Btn>
        </LoginBox>
      </Container>
    </>
  )
};

/**
 * < 로그인 페이지 >
 * 버튼 클릭 시, log의 상태를 통하여 보여지는 컴포넌트 변경
 */
function LoginPage(){
  const [log, setLog] = useState(false);
  return(
    <>
      <Selection log={log} setLog={setLog}/>
      {  log == true ? <Login /> : <SignIn />  }
      
    </>
  )
};

export default LoginPage;