import { Link, Outlet } from 'react-router-dom';
import { BannerImg } from '../../styles/Layouts/Banner.style';
import * as S from '../../styles/LearningPage/LearningPage.style'
import { useState } from 'react';


//Outlet 사용


function LearningPage(){

  const [currentTab, setCurrentTab] = useState(0);

  const subnav = [
    { name: 'ESG 개념', url: '/learning/concept' },
    { name: 'ESG 중요성', url: '/learning/importance' },
    { name: 'ESG 퀴즈', url: '/learning/quiz' },
  ];

  const indexHandler = index => setCurrentTab(index);

  return(
    <>
      <BannerImg/>

      <div className='d-flex flex-column flex-lg-row'>
        <S.Sidebar>
          <S.Title>MENU</S.Title>
          {
            subnav.map( (element, index) => (
              <S.List 
                key = {index}
                className = {index === currentTab ? "focused" : "" }
              >
                <Link 
                  to = {element.url} 
                  onClick = { () => indexHandler(index) }
                >
                  <i className="fa-solid fa-list-ul" /> {element.name}
                </Link>
              </S.List>
            ))
          }
        </S.Sidebar>
        
        <S.Main>
          <Outlet />
        </S.Main>
      </div>
    </>
  )
}

export default LearningPage;