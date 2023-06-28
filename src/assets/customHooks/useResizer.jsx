import { useState, useEffect, useCallback } from "react";
import useDebounce from "./useDebounce";
import {
  checkYAxisGreaterThan,
  checkYAxisLessThan,
  checkXAxisGreaterThan,
  checkXAxisLessThan,
} from "../utils/functions";

const useResizer = ({ size, conditionalStatement, axis }) => {
  const [status, setStatus] = useState(null);
  const validValues = ["less than", "greater than"];
  const validAxis = ["x", "y"];

  const checkSize = useCallback(() => {
    if (isNaN(parseInt(size))) {
      console.error(
        "Invalid screen size provided. Please enter a valid screen size."
      );
      return;
    }
    if (!validValues.includes(conditionalStatement)) {
      console.error(
        "Invalid conditional statement provided. Please provide a valid conditional statement."
      );
      return;
    }
    if (!validAxis.includes(axis)) {
      console.error(
        "Invalid axis value provided. Please provide a valid axis value."
      );
      return;
    }

    if (axis === "x" || conditionalStatement === "less than") {
      setStatus(checkXAxisLessThan(size));
    } else if (axis === "x" || conditionalStatement === "greater than") {
      setStatus(checkXAxisGreaterThan(size));
    } else if (axis === "y" || conditionalStatement === "less than") {
      setStatus(checkYAxisLessThan(size));
    } else if (axis === "y" || conditionalStatement === "greater than") {
      setStatus(checkYAxisGreaterThan(size));
    }
  },[])

   

  useEffect(() => {
    checkSize();
    return () => {
      null;
    };
  }, []);

  return { status };
};

export default useResizer;
