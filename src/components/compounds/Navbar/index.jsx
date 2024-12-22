import { Image } from "lucide-react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <figure>
          <img
            loading="lazy"
            src="/assets/images/Delishiana.webp"
            width={100}
            className={styles.logo}
          />
        </figure>
        <div className={styles.menuWrapper}>
          <a href="#">About</a>
          <a href="#">Crew</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.outlineButton}>Explore Menu</button>
          <button className={styles.filledButton}>Booking</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
