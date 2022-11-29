import { useEffect, useRef, useState } from 'react';

export function useTimer(initialTime: number, cb: () => void) {
  const ref = useRef(null);
  const [timeLeft, setStartTime] = useState(initialTime);

  useEffect(() => {
    ref.current = setInterval(() => setStartTime((prev) => prev - 1), 1000);
    return () => clearInterval(ref.current);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      cb();
    }
  }, [cb, timeLeft]);

  return timeLeft;
}
