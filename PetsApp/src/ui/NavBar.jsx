import styles from "./NavBar.module.css";
import { FaDog } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Logo}>
        <FaDog />
        Pets App
      </div>
    </div>
  );
};

export default NavBar;
