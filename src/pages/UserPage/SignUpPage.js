import { useState } from "react";
import { Container } from "react-bootstrap";
import Banner from "../../components/Layouts/Banner";
import SignUp from "../../components/Form/SignUp";
import * as S from "../../styles/LoginPage/LoginPage.style";

/**
 * < 로그인 페이지 >
 * 버튼 클릭 시, log의 상태를 통하여 보여지는 컴포넌트 변경
 */
function SignUpPage() {
  return (
    <>
      <Banner title="Sign up" subtitle="회원가입하기" />
      <Container>
        <SignUp />
      </Container>
    </>
  );
}

export default SignUpPage;
