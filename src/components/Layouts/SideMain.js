import { Outlet } from "react-router-dom";
import * as S from "../../styles/Layouts/SideMain.style"

// 좌측 사이드바, 우측 메인 컨텐츠 위치한 레이아웃
// props로 사이드바 적용
// Route, Outlet으로 메인 컨텐츠 적용
function SideMain(props){
  return(
    <S.Wrapper>
      <S.Sidebar>
        <S.Title>MENU</S.Title>
        {props.children}
      </S.Sidebar>

      <S.Main>
        <Outlet />
      </S.Main>
    </S.Wrapper>
  )
}

export default SideMain;