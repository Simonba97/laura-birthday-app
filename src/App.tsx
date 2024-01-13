import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreBirthday from './components/PreBirthday';
import BirthdayCard from './components/BirthdayCard';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/pre-birthday" element={<PreBirthday />} />
          <Route path="/birthday-card" element={<BirthdayCard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;