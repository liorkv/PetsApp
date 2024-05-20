import styles from "./Header.module.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className={styles.container}>
      <NavBar />
    </div>
  );
};

export default Header;
