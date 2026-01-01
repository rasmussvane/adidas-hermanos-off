import React, { useEffect } from "react";
const DOTS = [".", "..", "..."];

export default function LoadingDots() {
  const [currentState, setCurrentState] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prevState) => (prevState + 1) % DOTS.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className="inline-block text-left" style={{ width: "3ch" }}>
        {DOTS[currentState]}
      </span>
    </>
  );
}
