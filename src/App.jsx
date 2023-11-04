import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Category from './pages/Category';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="font-manrope">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
