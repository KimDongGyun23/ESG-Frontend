import { Outlet } from "react-router-dom";
import * as S from "../../styles/Layouts/SideMain.style"

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