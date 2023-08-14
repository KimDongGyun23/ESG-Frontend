import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styled from "styled-components";


// 로그인 박스 스타일
const LoginBox = styled.div`
  display : flex;
  align-items : center;
`;

// 로그인 했을 경우 프로필
function Profile(props){
  return(
    <div className='d-flex align-items-center ms-auto'>
      <p>박채림님</p>
      <NavDropdown className='ms-3' title="😂" id="navbarScrollingDropdown">
        <NavDropdown.Item onClick={()=>{props.setLogOn(false)}} >로그아웃</NavDropdown.Item>
      </NavDropdown>
    </div>
  )
};

/**
 * < Header >
 * 부트스트랩 Navbar 사용
 * 로그인 상태에 따라 프로필 표기
 */
function Header(){
  let [logOn, setLogOn] = useState(false);

  return(
    <>
      <Navbar className='my-3 justify-space-between' data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">LOVESG</Navbar.Brand>          
          <Nav>
            <Nav.Link className='me-4' href="/">HOME</Nav.Link>
            <Nav.Link className='me-4' href="/esg">나의ESG</Nav.Link>
            <Nav.Link className='me-4' href="/learning">ESG학습</Nav.Link>
            <Nav.Link className='me-4' href="/community">포럼</Nav.Link>
            <Nav.Link href="/introduce">LOVESG소개</Nav.Link>
          </Nav>
          <LoginBox>
            { 
              logOn == false 
              ? <a href='/login' className='ms-auto text-decoration-none'>로그인</a>
              : <Profile setLogOn={setLogOn}/> 
            }
          </LoginBox>

          
        </Container>
      </Navbar>
    </>
  )
}

export default Header;