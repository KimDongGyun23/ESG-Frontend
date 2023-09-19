import { useState } from "react";
import SideMain from "../../components/Layouts/SideMain";
import * as S from "../../styles/ForumPage/ForumPage.style"
import { BannerImg } from "../../styles/Layouts/Banner.style"
import { Link } from "react-router-dom";

function ForumPage(){

  const [currentTab, setCurrentTab] = useState(0);

  const subnav = [
    { name: 'Questions', url: '/forum/questions' },
    { name: 'E (Environment)', url: '/forum/environment' },
    { name: 'S (Social)', url: '/forum/social' },
    { name: 'G (Governance)', url: '/forum/governance' },
    { name: 'Tags', url: '/forum/tags' },
  ];

  const indexHandler = index => setCurrentTab(index);

  return(
    <>
      <BannerImg />
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
                <i className="fa-solid fa-tag" /> {element.name}
              </Link>
            </S.List>
          ))
        }
      </SideMain>

    </>
  )
};

export default ForumPage;