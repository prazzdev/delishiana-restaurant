import { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <div
          className={`${styles.menuWrapper} ${isMenuOpen ? styles.open : ""}`}
        >
          <a href="#">About</a>
          <a href="#">Crew</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.outlineButton}>Explore Menu</button>
          <button className={styles.filledButton}>Booking</button>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
