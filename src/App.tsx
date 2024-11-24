import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Trips from './pages/Trips';
import Upload from './pages/Upload';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
