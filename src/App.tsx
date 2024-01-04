import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PreBirthday from './components/PreBirthday';
import StartCard from './components/StartCard';
import EndCard from './components/EndCard';
import HelpCard from './components/HelpCard';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/pre-birthday" element={<PreBirthday />} />
          <Route path="/start-card" element={<StartCard />} />
          <Route path="/end-card" element={<EndCard />} />
          <Route path="/help-card" element={<HelpCard />} />
        </Routes>
        <Link to="/pre-birthday">Click here</Link>
      </div>
    </Router>
  );
};

export default App;