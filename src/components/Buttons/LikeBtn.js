import styled, { keyframes } from "styled-components";

// 좋아요 버튼 구현
const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;

function LikeBtn({ onClick }) {
  const HeartBtn = styled.button`
    margin-bottom: 1rem;
    margin-top: 2rem;
    max-width: 10rem;
    background-color: transparent;
    border-radius: 1rem;
    padding: 0.5rem 0.8rem;
    border: 1px solid lightgray;
    cursor: pointer;
    color: #e74c3c;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease; /* 부드러운 애니메이션을 위한 트랜지션 설정 */

    strong {
      font-size: 1rem;
      color: gray;
    }
    &:hover {
      animation: ${scaleAnimation} 0.8s ease; /* 애니메이션 적용 */
    }
  `;

  return (
    <HeartBtn onClick={onClick}>
      <i className="fa-solid fa-heart fa-lg" />
      <strong> 뉴스 찜하기</strong>
    </HeartBtn>
  );
}

export default LikeBtn;
