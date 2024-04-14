import { Route, Routes } from 'react-router-dom';
import './assets/styles/index.scss';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import OneReportPage from './pages/OneReportPage';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<OneReportPage />} />
      </Routes>
    </div>
  );
}

export default App;
