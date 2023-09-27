import { Link } from 'react-router-dom';
import { BannerImg } from '../../styles/Layouts/Banner.style';
import * as S from '../../styles/LearningPage/LearningPage.style'
import { useState } from 'react';
import SideMain from '../../components/Layouts/SideMain';

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
      <SideMain>
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
      </SideMain>
    </>
  )
}

export default LearningPage;