import YouTube from "react-youtube";
import * as S from "../../styles/MainPage/MainYoutube-style";
import axios from "axios";
import React, { useState, useEffect } from "react";

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
      <S.Text>12월 ESG 영상</S.Text>
      <S.Text>{videoTitle}</S.Text>
      <S.CenteredDiv>
        <S.RoundedYouTube
          key={videoId}
          videoId={videoId}
          opts={{
            height: "500",
            width: "1100",
            playerVars: {
              autoplay: 1,
              re1: 0, // 관련동영상 안뜨게
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
