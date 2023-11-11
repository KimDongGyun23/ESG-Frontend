import * as S from "../../styles/LearningPage/Quiz-style";
import { useEffect, useState } from "react";

function Quiz() {
  const [num, setNum] = useState(0);
  const quiz = {
    list: [
      {
        id: 0,
        question: "ESG에서, E는 환경을 의미한다.",
        options: ["O", "X"],
        answer: "O",
      },
      {
        id: 1,
        question: "랄라리 랄라 셩이다.",
        options: ["O", "X"],
        answer: "O",
      },
      {
        id: 2,
        question: "우리네 인생은 ?",
        options: ["O", "X"],
        answer: "X",
      },
      {
        id: 3,
        question: "삼귀자",
        options: ["O", "X"],
        answer: "X",
      },
      {
        id: 4,
        question: "사랑해 널 사랑해",
        options: ["O", "X"],
        answer: "O",
      },
      {
        id: 5,
        question: "오다리란 ? ",
        options: ["O", "X"],
        answer: "X",
      },
    ],
  };

  const [selectedOption, setSelectedOption] = useState(""); // 선택한 옵션
  const [userAnswer, setUserAnswer] = useState([]); // 답변
  const [score, setScore] = useState(0); // 점수

  function answerCheck() {
    // 문제 가져오고 정답 처리
    const question = quiz.list[num];
    if (question.answer === selectedOption) {
      setScore(score + 1);
    }
  }

  function onClickBtn() {
    if (num <= quiz.list.length - 1) {
      answerCheck(); // 점수 갱신
      setUserAnswer([...userAnswer, selectedOption]); // 사용자 답변 추가
      setNum(num + 1); // 다음 문제로 이동
      setSelectedOption(""); // 옵션 초기화 상태로 갱신
      startTimer(); // 타이머 초기화
    } else {
      // 마지막 문제일 때
      answerCheck(); // 정답 여부 확인 후 점수 갱신
      setUserAnswer([...userAnswer, selectedOption]); // 사용자 답변 추가
      startTimer();
    }
  }

  const [time, setTime] = useState(30);
  const [progress, setProgress] = useState({});

  const startTimer = () => {
    setTime(30); // 타이머 초기화
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        // 타이머 중지
        clearInterval(timerInterval);
      }
    }, 1000);

    const countdown = ((30 - time) / 30) * 180;
    setProgress({
      transform: `rotate(${countdown}deg)`,
    });
    return () => clearInterval(timerInterval);
  }, [time]); // time 값이 변경될 때마다 실행

  return (
    <>
      <S.Container>
        <S.SolvedContainer>
          {num < quiz.list.length ? ( // 모든 문제를 다 풀지 않았을 때
            <S.Barbox>
              <S.TimerCircle progress={num / quiz.list.length}></S.TimerCircle>
              {num}/{quiz.list.length}
            </S.Barbox>
          ) : null}{" "}
          {/* 모든 문제를 다 푼 경우에는 숨김 */}
        </S.SolvedContainer>
        <S.QuizWrapper>
          {num <= quiz.list.length - 1 ? (
            <>
              <S.Label>
                문제{num + 1} <S.Quiz> {quiz.list[num].question}</S.Quiz>
              </S.Label>
              <S.Option>
                {quiz.list[num].options.map((option, index) => (
                  <S.StyledLabel
                    key={index}
                    style={{
                      backgroundColor:
                        selectedOption === option ? "orange" : "white",
                      color: selectedOption === option ? "white" : "black",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedOption(option)}
                  >
                    {option}
                  </S.StyledLabel>
                ))}
              </S.Option>
              <S.ButtonWrapper>
                <S.CustomNextButton onClick={onClickBtn}>
                  다음 퀴즈로 넘어가기
                </S.CustomNextButton>
              </S.ButtonWrapper>
            </>
          ) : (
            // 이 부분 수정 필요 
            <S.ResultContainer>
              <S.Label>ESG QUIZ</S.Label>
              <S.LabelScore>최종 점수는 {score}점입니다!</S.LabelScore>
            </S.ResultContainer>
          )}
        </S.QuizWrapper>
        <S.TimerWrapper>
          {num < quiz.list.length ? ( // 모든 문제를 다 풀지 않았을 때
            <S.TimerContainer>
              <S.MaskContainer>
                <S.Mask style={progress}></S.Mask>
              </S.MaskContainer>
              <strong> 남은 시간: {time} 초</strong>
            </S.TimerContainer>
          ) : null}{" "}
          {/* 모든 문제를 다 푼 경우에는 숨김 */}
        </S.TimerWrapper>
      </S.Container>
    </>
  );
}

export default Quiz;
