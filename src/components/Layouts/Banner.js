import * as S from "../../styles/Layouts/Banner.style"

// Banner
function Banner(props){
  return(
    <S.BannerImg>
      <S.BannerTitle>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </S.BannerTitle>
    </S.BannerImg>
  )
};

export default Banner;