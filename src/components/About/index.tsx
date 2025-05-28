import { useLocation } from "react-router";
import "./styles.module.css";

export const About = () => {
  const { state } = useLocation();

  return (
    <div>
      <h1>About</h1>
      <p>{state as string}</p>
    </div>
  );
};
