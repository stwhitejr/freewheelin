import Home from './pages/Home';
import 'App.css';
import {createContext, useEffect, useMemo, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';

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
    <BrowserRouter>
      <AppContext.Provider value={{isMobile}}>
        <Home />
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
