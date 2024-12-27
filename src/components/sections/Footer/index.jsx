import styles from "./Footer.module.scss";
import Marquee from "@/components/ui/marquee";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.menuWrapper}>
          <a href="#" className={styles.menu}>
            About
          </a>
          <span className={styles.separator}>●</span>
          <a href="#" className={styles.menu}>
            Crew
          </a>
          <span className={styles.separator}>●</span>
          <a href="#" className={styles.menu}>
            Contact
          </a>
          <span className={styles.separator}>●</span>
          <a href="#" className={styles.menu}>
            Menu
          </a>
        </div>
        <div className={styles.copyright}>
          <span>© Agung Praz 2024, All Rights Reserved</span>
          <span>© Agung Praz 2024, All Rights Reserved</span>
          <span>© Agung Praz 2024, All Rights Reserved</span>
          <span>© Agung Praz 2024, All Rights Reserved</span>
          <span>© Agung Praz 2024, All Rights Reserved</span>
          <span>© Agung Praz 2024, All Rights Reserved</span>
          <span>© Agung Praz 2024, All Rights Reserved</span>
          <span>© Agung Praz 2024, All Rights Reserved</span>
        </div>
        <div className={styles.trademark}>
          <div className={styles.logo}>
            <img
              src="/assets/images/Delishiana-trademark.webp"
              alt="Delishiana logo"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
