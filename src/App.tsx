import { Routes, Route } from 'react-router-dom';
import LegalEaseLandingPage from './page';
import TeamPage from './TeamPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LegalEaseLandingPage />} />
      <Route path="/equipe" element={<TeamPage />} />
    </Routes>
  );
}
