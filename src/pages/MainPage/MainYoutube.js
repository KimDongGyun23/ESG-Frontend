import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../../styles/MainPage/MainYoutube-style";

function MainYoutube() {
  const [videoTitle, setVideoTitle] = useState("");
  const videoId = "QPwrMIbc7AY";

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyDbFQgUh-_6uzNuYzZoXNdRoKLUDaWUjYs`
      )
      .then((response) => {
        const title = response.data.items[0].snippet.title;
        setVideoTitle(title);
      })
      .catch((error) => {
        console.error("Error fetching video title", error);
      });
  }, [videoId]);

  return (
    <>
      <S.Text>12월 ESG 추천 영상</S.Text>
      <S.Text>{videoTitle}</S.Text>
      <S.CenteredDiv>
        <S.StyledYouTube
          videoId={videoId}
          opts={{
            height: "500",
            width: "1100",
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </S.CenteredDiv>
    </>
  );
}

export default MainYoutube;
