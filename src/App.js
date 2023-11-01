import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
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

// 부트스트랩, 스타일 컴포넌트, 리액트 라우터 돔 설치
function App() {
  return (
    <div className="App">
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

        <Route path="/forum" element={<ForumPage />}>
          <Route index element={<Questions />} />
          <Route path="/forum/questions" element={<Questions />} />
          <Route path="/forum/environment" element={"environment"} />
          <Route path="/forum/social" element={"social"} />
          <Route path="/forum/governance" element={"governance"} />
          <Route path="/forum/tags" element={"tags"} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
