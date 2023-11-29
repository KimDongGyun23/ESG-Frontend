import { useEffect, useState } from "react";
import styled from "styled-components";
import wordcloudE from "../assets/images/wordcloudE.png";
import wordcloudS from "../assets/images/wordcloudS.png";
import wordcloudG from "../assets/images/wordcloudG.png";

const StyledWordcloudContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-item: flex-start;
  margin-top: -1rem;
`;

const StyledWordcloudImage = styled.img`
  width: 100%;
  max-width: 330px;
  height: auto;
  margin: 2rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Wordcloud = () => {
  const wordcloudImages = [wordcloudE, wordcloudS, wordcloudG];

  return (
    <StyledWordcloudContainer>
      {wordcloudImages.map((image, index) => (
        <StyledWordcloudImage
          key={index}
          src={image}
          alt={`Wordcloud ${index + 1}`}
        />
      ))}
    </StyledWordcloudContainer>
  );
};

export default Wordcloud;
