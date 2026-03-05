import { useEffect } from "react";

const Terminal = () => {
  useEffect(() => {
    window.location.href = "/terminal/flush.sh";
  }, []);

  return null;
};

export default Terminal;
