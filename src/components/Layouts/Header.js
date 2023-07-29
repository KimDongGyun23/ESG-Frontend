import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styled from "styled-components";


// 로그인 박스 스타일
const LoginBox = styled.div`
  display : flex;
  border-left : 1px solid rgb(156, 156, 156);
  align-items : center;

  @media (max-width : 992px){
    display : none;
  }
`;

// 992px 이상일 때, Navbar에 노출 
const LargeNav = styled(Nav)`
  justify-content : center;

  @media (max-width : 992px){
    display : none;
  }
`;

// 992px 미만일 때, dropdown에 노출
const SmallNav = styled(Nav)`
  display : none;
  font-size : 13px;
  line-height: 2em;
  background : #f3ece8;
  color : rgb(148, 90, 21);
  padding : 10px 0;
  text-align : center;

  @media (max-width : 992px){
    display : block;
  }
`;

const BtnDropDown = styled.button`
  display : none;
  border : none;
  background : inherit;
  
  @media (max-width : 992px){
    display : block;
  }
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

function NavList(props){
  return(
    <props.tag>
      <Nav.Link href="/">ESG정보</Nav.Link>
      <Nav.Link href="/evaluation">ESG평가지표</Nav.Link>
      <Nav.Link href="#pricing">기업동향</Nav.Link>
      <Nav.Link href="#pricing">맞춤서비스</Nav.Link>
      <Nav.Link href="/community">커뮤니티</Nav.Link>
      <Nav.Link href="#pricing">기부하기</Nav.Link>
    </props.tag>
  )
};

/**
 * < Header >
 * 부트스트랩 Navbar 사용
 * 992px를 기준으로 상단 링크들의 가시성 여부 결정 / 반응형
 * 로그인 상태에 따라 프로필 표기
 */
function Header(){
  let [logOn, setLogOn] = useState(true);
  let [dropdown, setDropdown] = useState(false);

  return(
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand className="col-lg-2" href="/">LOVESG</Navbar.Brand>
          
          <NavList tag={LargeNav} className="col-lg-8"/>
          <LoginBox className='col-lg-2'>
            { 
              logOn == false 
              ? <a href='/login' className='ms-auto'>Login</a>
              : <Profile setLogOn={setLogOn}/> 
            }
            <div className='ps-3'><i className="fa-regular fa-moon"></i></div>
          </LoginBox>

          <BtnDropDown onClick={()=>{setDropdown((prevVisible) => !(prevVisible)) }}>
            <i className="fa-solid fa-bars"></i>
          </BtnDropDown>
          
        </Container>
      </Navbar>
      {dropdown && ( <NavList tag={SmallNav}/> )}
    </>
  )
}

export default Header;