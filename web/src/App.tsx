import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AchievementPage from './pages/AchievementPage';
import AllAchievements from './pages/AllAchievements';

function App() {
  return (
    <BrowserRouter basename="/quest">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/achievements" element={<AllAchievements />} />
        <Route path="/achievement/:id" element={<AchievementPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
