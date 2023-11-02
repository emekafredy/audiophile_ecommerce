/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { getScreenSize } from '../helpers';

function useScreenSize() {
  const [screenSize, setScreenSize] = useState(
    getScreenSize(window.innerWidth) || 'desktop',
  );

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      if (window.innerWidth <= 570) {
        setScreenSize('mobile');
      } else if (window.innerWidth > 570 && window.innerWidth < 968) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    });

    return () => {
      window.removeEventListener('resize', (e) => {
        setScreenSize('desktop');
      });
    };
  }, [screenSize]);

  return { screenSize };
}

export default useScreenSize;
