import logo from "../../assets/logo.svg";
import styles from "./Menu.module.scss";

export default function Menu() {
  const rotas = [
    {
      label: "Inicio",
      to: "/",
    },
    {
      label: "Cardápio",
      to: "/cardapio",
    },
    {
      label: "Sobre",
      to: "/sobre",
    },
  ];
  return (
    <nav className={styles.menu}>
      <img src={logo} alt="logo do aluroni" />
      <ul className={styles.menu__link}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <a href={rota.to}>{rota.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
