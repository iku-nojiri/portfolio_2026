import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

export function Loading() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setIsVisible(true);
    }, 250);

    return () => clearTimeout(timerID);
  }, []);

  return (
    <div className="flex justify-center py-12">
      {isVisible && (
        <RotatingLines
          visible={true}
          width="40"
          strokeWidth="5"
          animationDuration="0.75"
          color="#155dfc"
          ariaLabel="loading"
        />
      )}
    </div>
  );
}
