import {useEffect} from 'react'

const useScrollListener = (callback) => {
  useEffect(() => {
    const handleScroll = () => {
      callback(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
};

export default useScrollListener