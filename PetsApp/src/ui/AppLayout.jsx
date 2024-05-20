import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
