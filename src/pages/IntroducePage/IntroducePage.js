import * as S from "../../styles/IntroducePage/IntroducePage.style";
import Banner from "../../components/Layouts/Banner";

/**
 * < TeamPage >
 */
function IntroducePage() {
  const GitHubLink = "https://github.com/KWU-ESG/";

  return (
    <>
      <Banner title="Why LOVESG?" subtitle="팀과 서비스 소개" />

      <S.TitleBox>
        <div>
          <S.Title>What We Do</S.Title>
          <S.Description>
            우리 서비스는 어려운 ESG개념을 보편화하기위하여 출발하였습니다.
            ESG가 어렵기보다는 이제 친숙한 ESG의 사회적 보편화를 위해
            노력합니다.
          </S.Description>
        </div>
        <div>
          <S.Title>The ultimate goal</S.Title>
          <S.Description>
            소비자가 기업의 ESG 경향을 파악, 분석하고 맞춤 소비를 할 수 있게
            돕습니다. 습득·학습·공유의 3단계로 가치를 창출하려 합니다.
          </S.Description>
        </div>
      </S.TitleBox>
      <S.ContributionBox>
        <S.ContributionTitle>LOVESG에 기여 하기</S.ContributionTitle>
        <S.ContributionContent>
          저희 웹 서비스에 기여하고 싶으시다면, 다음 저장소에 PR을 보내주세요!
          :)
        </S.ContributionContent>
        <S.ButtonContainer>
          <S.GitHubButton href={GitHubLink} target="_blank">
            {" "}
            GitHub에 기여하기{" "}
          </S.GitHubButton>
        </S.ButtonContainer>
      </S.ContributionBox>
    </>
  );
}

export default IntroducePage;
