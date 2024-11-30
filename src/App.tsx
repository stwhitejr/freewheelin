import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Trip from 'pages/Trip';
import 'App.css';
import {createContext, useEffect, useMemo, useState} from 'react';

const MOBILE_THRESHOLD = 700;

export const AppContext = createContext<{isMobile: boolean}>({
  isMobile: false,
});

const App = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const isMobile = useMemo(
    () => windowSize.width <= MOBILE_THRESHOLD,
    [windowSize]
  );

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AppContext.Provider value={{isMobile}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trip/:tripId" element={<Trip />}>
            <Route path="entry/:entryId" />
          </Route>
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
