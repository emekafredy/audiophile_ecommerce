import { useLayoutEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Category from './pages/Category';
import Layout from './Layout';

const Scroll = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Scroll>
        <div className="font-manrope">
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/:category"
                element={<Category />}
              />
            </Route>
          </Routes>
          <ToastContainer />
        </div>
      </Scroll>
    </BrowserRouter>
  );
}

export default App;
