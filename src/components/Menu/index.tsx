import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

export default function Menu() {
  const routes = [
    { label: "Home", to: "/" },
    { label: "Catalog", to: "/catalog" },
    { label: "About", to: "/about" },
    { label: "Cart", to: "/cart" },
  ];
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {routes.map((route, ind) => (
          <li key={ind} className={styles.menu__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
