import { useState, useEffect } from "react";

export const useRobot = (url, method = "GET", dependencies = null) => {
  const [robots, setRobots] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await fetch(url, { method });
      const data = await response.json();
      if (response.ok) {
        setRobots(data);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies]);

  return [robots];
};
