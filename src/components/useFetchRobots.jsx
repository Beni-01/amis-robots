import { useState, useEffect } from "react";

export const useRobot = (url, dependencies = null) => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(url);
      const data = await response.json();
      setRobots(data);
    })();
  }, [dependencies]);

  return [robots];
};
