import { Container, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';

// 글자 간격 조정
const TextStyle = styled.div`
  line-height : 3rem;
`;

// Footer
// 좌우 2열 + 하단 구성
function Footer(){
  return(
    <Container>
      <Row>
        <Col className='px-5 py-5'>
            <div className='fs-4'>LOVESG</div>
            <TextStyle>Hello, feel free to contact LOVESG anytime.</TextStyle>
            <TextStyle className='mb-4'>
              <i className="fa-brands fa-facebook-f me-5"></i>
              <i className="fa-brands fa-twitter me-5"></i>
              <i className="fa-brands fa-linkedin-in me-5"></i>
              <i className="fa-brands fa-instagram me-5"></i>
            </TextStyle>
        </Col>
        
        <Col className='px-5 py-5'>
          <div className='fs-4'>Contact</div>
          <TextStyle>21, Gwangun-ro, Nowon-gu, Seoul, Republic of Korea</TextStyle>
          <TextStyle>dasapcr@naver.com</TextStyle>
          <TextStyle>(+82) 10-2572-2589</TextStyle>
        </Col>
      </Row>

      <Row>
        <Col className='py-5'>
          <p className="text-center">&copy; 2023. LOVESG All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  )
};

export default Footer;