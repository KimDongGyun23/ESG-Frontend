import { createContext, useContext, useState, useEffect } from "react";

const LikedArticlesContext = createContext();

export const LikedArticlesProvider = ({ children }) => {
  const [likedArticles, setLikedArticles] = useState([]);

  // 컴포넌트 마운트 시 로컬 스토리지에서 좋아하는 기사를 로드
  useEffect(() => {
    const storedLikedArticles =
      JSON.parse(localStorage.getItem("likedArticles")) || [];
    setLikedArticles(storedLikedArticles);
  }, []);

  // 상태가 변경될 때마다 좋아하는 기사를 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("likedArticles", JSON.stringify(likedArticles));
  }, [likedArticles]);

  const addLikedArticle = (article) => {
    setLikedArticles((prevLikedArticles) => [...prevLikedArticles, article]);
  };

  return (
    <LikedArticlesContext.Provider value={{ likedArticles, addLikedArticle }}>
      {children}
    </LikedArticlesContext.Provider>
  );
};

export const useLikedArticles = () => {
  return useContext(LikedArticlesContext);
};
