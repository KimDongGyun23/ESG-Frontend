import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import * as S from "../../styles/Layouts/Header.style"

// LoginPage 폴더로 이동 예정
// 로그인 했을 경우 프로필
// function Profile(props){
//   return(
//     <div className='d-flex align-items-center ms-auto'>
//       <p>박채림님</p>
//       <NavDropdown className='ms-3' title="😂" id="navbarScrollingDropdown">
//         <NavDropdown.Item onClick={()=>{props.setLogOn(false)}} >로그아웃</NavDropdown.Item>
//       </NavDropdown>
//     </div>
//   )
// };

/**
 * < Header >
 * 로그인 상태에 따라 프로필 표기 ( 차후 수정 )
 */
function Header(){
  // let [logOn, setLogOn] = useState(false);

  return(
    <>
      <Navbar className='my-3' expand="md" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">LOVESG</Navbar.Brand>
          <S.Toggler aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='justify-content-center' id="basic-navbar-nav">
            <Nav className='mx-auto'>
              <S.NavLink href="/">HOME</S.NavLink>
              <S.NavLink href="/esg">나의ESG</S.NavLink>
              <S.NavLink href="/learning">ESG학습</S.NavLink>
              <S.NavLink href="/community">포럼</S.NavLink>
              <S.NavLink href="/introduce">LOVESG소개</S.NavLink>
            </Nav>

            <Nav className='text-end'>
              <Nav.Link href="/login">로그인</Nav.Link>
            </Nav>
            {/* <S.Login>
              { 
                logOn === false 
                ? <a href='/login'>로그인</a>
                : <Profile setLogOn={setLogOn}/> 
              }
            </S.Login> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;