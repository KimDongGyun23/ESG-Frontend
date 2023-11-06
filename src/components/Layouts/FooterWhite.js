import * as S from "../../styles/Layouts/Footer-white";

function FooterWhite() {
  return (
    <S.Container>
      <S.TextBox>
        <h5>LOVESG</h5>
        <div>Hello, feel free to contact LOVESG anytime.</div>
        <div>
          <i className="fa-brands fa-facebook-f me-5"></i>
          <i className="fa-brands fa-twitter me-5"></i>
          <i className="fa-brands fa-linkedin-in me-5"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </S.TextBox>

      <S.TextBox>
        <h5>Contact</h5>
        <div>
          <p>21, Gwangun-ro, Nowon-gu,</p>
          <p>Seoul, Republic of Korea</p>
        </div>
        <div>
          <p>dasapcr@naver.com</p>
          <p>(+82) 10-2572-2589</p>
        </div>
      </S.TextBox>
      <S.CopyRight>&copy; 2023. LOVESG All rights reserved.</S.CopyRight>
    </S.Container>
  );
}

export default FooterWhite;
