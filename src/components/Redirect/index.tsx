import { useEffect, useRef, useState } from "react";
import "./styles.module.css";
import { useNavigate } from "react-router";

export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeOut = useRef(0);
  const navigation = useNavigate();

  useEffect(() => {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time <= 0) {
      navigation("/about", {
        state: `This is state: ${Math.random()}`,
      });
    }

    return () => {
      clearTimeout(timeOut.current);
    };
  }, [time]);
  return (
    <div>
      <h1>Redirect {time}</h1>
    </div>
  );
};
