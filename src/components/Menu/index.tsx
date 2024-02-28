import logo from "../../assets/logo.svg";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <img src={logo} alt="logo do aluroni" />
    </nav>
  );
}
