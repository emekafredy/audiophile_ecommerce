/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { getScreenSize } from '../helpers';

function useScreenSize() {
  const [screenSize, setScreenSize] = useState(
    getScreenSize(window.innerWidth) || 'desktop',
  );

  useEffect(() => {
    window.addEventListener('resize', async (e) => {
      const size = await getScreenSize(window.innerWidth);
      setScreenSize(size);
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
