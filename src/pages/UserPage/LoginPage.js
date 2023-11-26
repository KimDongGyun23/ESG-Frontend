import { useState } from "react";
import { Container } from "react-bootstrap";
import Banner from "../../components/Layouts/Banner";
import Login from "../../components/Form/Login";

/**
 * < 로그인 페이지 >
 * 버튼 클릭 시, log의 상태를 통하여 보여지는 컴포넌트 변경
 */
function LoginPage() {
  return (
    <>
      <Banner title="Sign in" subtitle="로그인하기" />
      <Container>
        <Login />
      </Container>
    </>
  );
}

export default LoginPage;
