import { useState, useEffect, useCallback, useMemo } from "react";
import useDebounce from "./useDebounce";

const useAOSLazyLoad = () => {
  const [AOSLoaded, setAOSLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadAOS = async () => {
      const module = await import("aos");
      module.default.init({ once: true });
      if (isMounted) {
        setAOSLoaded(true);
      }
    }

    loadAOS()

    return () => {
      isMounted = false;
    };
  }, []);

  const refreshAOS = useDebounce(useCallback(() => {
    if (AOSLoaded) {
      import("aos").then((module) => {
        const AOS = module.default;
        AOS.refresh();
      });
    }
  }, [AOSLoaded]),200)

  return { AOSLoaded, refreshAOS };
};

export default useAOSLazyLoad;
