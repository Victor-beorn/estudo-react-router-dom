import { Link } from "react-router";
import styles from "./styles.module.css";

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/" state={"This is state from About"}>
            About
          </Link>
        </li>
        <li>
          <Link to="/posts/">Posts</Link>
        </li>
        <li>
          <Link to="/posts/10">Posts 10</Link>
        </li>
        <li>
          <Link to="/redirect/">Redirect</Link>
        </li>
      </ul>
    </nav>
  );
};
