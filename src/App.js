import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import CommunityPage from './pages/CommunityPage';
import EvaluationPage from './pages/EvaluationPage';
import TeamPage from './pages/TeamPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// 부트스트랩, 스타일 컴포넌트, 리액트 라우터 돔 설치
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element = { <MainPage /> } />
        <Route path='/team' element = { <TeamPage /> } />
        <Route path='/login' element = { <LoginPage /> } />
        <Route path="/evaluation" element={ <EvaluationPage /> } />
        <Route path="/community" element={ <CommunityPage /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
