/**
 * Answer by Qop (https://stackoverflow.com/users/4484822/qop) on StackOverFlow
 * Original Answer: https://stackoverflow.com/a/36862446/16130802
 * Licensed under CC BY-SA 4.0
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}