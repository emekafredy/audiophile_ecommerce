import { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/Common/NavBar';
import Footer from './components/Common/Footer';

function Layout() {
  const [category, setCategory] = useState('');
  const setProdCategory = useCallback((c) => setCategory(c), []);
  return (
    <>
      <NavBar prodCategory={category} setProdCategory={setProdCategory} />
      <Outlet />
      <Footer prodCategory={category} />
    </>
  );
}

export default Layout;
