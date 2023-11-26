import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import FooterWhite from "./components/Layouts/FooterWhite";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/UserPage/LoginPage";
import SignUpPage from "./pages/UserPage/SignUpPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import IntroducePage from "./pages/IntroducePage/IntroducePage";
import LearningPage from "./pages/LearningPage/LearningPage";
import { Route, Routes } from "react-router-dom";
import Concept from "./pages/LearningPage/Concept";
import Importance from "./pages/LearningPage/Importance";
import Quiz from "./pages/LearningPage/Quiz";
import ForumPage from "./pages/ForumPage/ForumPage";
import Questions from "./pages/ForumPage/Questions";
import ForumRegister from "./pages/ForumPage/ForumRegister";
import NewsPage from "./pages/NewsPage/News";
import EnvironmentNews from "./pages/NewsPage/EnvironmentNews";
import SocialNews from "./pages/NewsPage/SocialNews";
import GovernanceNews from "./pages/NewsPage/GovernanceNews";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import { AuthProvider, useAuth } from "./context/AuthContext";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'GowunBatang Bold';
  }
`;

// 부트스트랩, 스타일 컴포넌트, 리액트 라우터 돔 설치
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/introduce" element={<IntroducePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/learning" element={<LearningPage />}>
            <Route index element={<Concept />} />
            <Route path="/learning/concept" element={<Concept />} />
            <Route path="/learning/importance" element={<Importance />} />
            <Route path="/learning/quiz" element={<Quiz />} />
          </Route>

          <Route path="/esg" element={<NewsPage />}>
            <Route index element={<EnvironmentNews />} />
            <Route path="/esg/e" element={<EnvironmentNews />} />
            <Route path="/esg/s" element={<SocialNews />} />
            <Route path="/esg/g" element={<GovernanceNews />} />
            {/* element에 component 넣을 예정 */}
          </Route>

          <Route path="/forum" element={<ForumPage />}>
            <Route index element={<Questions />} />
            <Route path="/forum/questions" element={<Questions />} />
            <Route path="/forum/environment" element={"environment"} />
            <Route path="/forum/social" element={"social"} />
            <Route path="/forum/governance" element={"governance"} />
            <Route path="/forum/tags" element={"tags"} />
            <Route path="/forum/ForumRegister" element={<ForumRegister />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {window.location.pathname === "/introduce" ? (
          <FooterWhite />
        ) : (
          <Footer />
        )}
        {/* 조건부 렌더링을 사용하여 경로가 "introduce"일 때만 FooterWhite를 렌더링하고 그 외의 경우에는 기본 Footer를 렌더링함 */}
      </AuthProvider>
    </div>
  );
}

export default App;
