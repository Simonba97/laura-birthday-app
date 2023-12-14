import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PreBirthday from './components/PreBirthday';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/pre-birthday" element={<PreBirthday />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;