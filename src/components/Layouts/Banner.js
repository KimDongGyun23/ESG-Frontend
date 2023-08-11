import styled from "styled-components";
import banner from '../../img/banner.png';

// 메인 이미지
const MainImg = styled.div`
  height : 356px;
  background-image : url(${banner});
  background-size : cover;
  background-position : center;
  background-repeat : no-repeat;
  position : relative;
  margin-bottom : 50px;
`;

// 내부 Title
const MainTitle = styled.div`
  width : 503px;
  height : 178px;
  border-radius : 20px 20px 0 0;
  background : white;
  position : absolute;
  bottom : 0;
  left : 0;
  right : 0;
  margin : 0 auto;
  padding : 35px;
  text-align : center;
`;

// 메인 배경
function Banner(props){
  return(
    <MainImg>
      <MainTitle>
        <h2 className="m-3 fs-1">{props.title}</h2>
        <p className="fs-5">{props.subtitle}</p>
      </MainTitle>
    </MainImg>
  )
};

export default Banner;