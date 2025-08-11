import { useEffect, useState } from "react";
import "./Time.css";

export function Time() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const date = new Date();
      setTime(
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
      );
    }
    const interval = setInterval(updateTime, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return <div className="Time">{time}</div>;
}

export default Time;
