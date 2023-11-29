import styled from "styled-components";

export const Wrapper = styled.div`
  width: 20rem;
  gap: 20px;
  border: 1px solid black;
  padding: 3rem;
  margin: 1rem -3rem 0 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: none;
  box-shadow: 0px 0px 10px gray;
  border-radius: 1rem;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: left;
  padding-bottom: 1rem;
  @media (min-width: 768px) {
    width: auto;
    margin-bottom: 0;
  }
`;

export const Select = styled.select`
  color: rgba(128, 128, 128, 1);
  height: 100%;
  font-size: 1rem;
  border-radius: 5px;
  border: 2px solid rgba(234, 234, 234, 1);

  @media (min-width: 768px) {
    max-width: none;
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Label = styled.div`
  padding-bottom: 1rem;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 500;

  @media (min-width: 768px) {
    max-width: none;
    width: auto;
    margin-bottom: 0;
  }
`;

export const Subject = styled.input`
  width: 100%;
  padding-left: 1rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid rgba(234, 234, 234, 1);

  @media (min-width: 768px) {
    max-width: none;
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid rgba(234, 234, 234, 1);

  @media (min-width: 768px) {
    max-width: none;
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Error = styled.div`
  padding-top: 1rem;
  font-size: 1rem;
  color: red;
  font-family: Inter;
`;

export const SubmitButton = styled.button`
  width: 13rem;
  height: 3rem;
  border: none;
  line-height: 18px;
  font-size: 1.5rem;
  font-weight: 900;
  background-color: ${(props) => (props.isActive ? "orange" : "gray")};
  color: #fff;
  border-radius: 1rem;
  padding: 1rem;

  @media (min-width: 768px) {
    width: auto;
    margin-bottom: 0;
  }
`;

// 현재 이미지 사용 x
export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
  margin-left: 70px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;
