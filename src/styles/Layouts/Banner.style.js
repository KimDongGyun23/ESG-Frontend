import styled from "styled-components";
import banner from "../../assets/images/banner1.jpg";

// 배너 이미지
export const BannerImg = styled.div`
  height: 35rem;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  margin-bottom: 2rem;
`;

// 내부 Title
export const BannerTitle = styled.div`
  width: 35%;
  border-radius: 20px 20px 0 0;
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  & > h2 {
    margin: 1rem 0 1.5rem;
    font-size: 2.5rem;
  }

  & > p {
    font-size: 1.5rem;
  }
`;
