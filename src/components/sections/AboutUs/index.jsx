import styles from "./AboutUs.module.scss";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
const AboutUsSection = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUsTitle}>
        <Marquee pauseOnHover className="[--duration:5s]">
          <span>∎</span>
          <h1>About Us</h1>
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:5s]">
          <span>∎</span>
          <h1>About Us</h1>
        </Marquee>
      </div>
      <div className={styles.aboutUsDescription}>
        <h1>
          Open Yourself To New Cultures, Make New Memories And Indulge In
          Fascinating Cuisines At Our All-Day Diner That Brings Together The
          Experiences From Around The World. This Restaurant Chain Taps Into A
          Unique Thread That Binds People From All Walks Of Life Together. We
          Are Fuelled By Our Passion For Good Food, Great People And A Glorious
          Time. Head Over To The Liveliest Commune In The City.
        </h1>

        <img src="/assets/images/chili.webp" alt="chili icon" />
        <img src="/assets/images/bowl-criptos.webp" alt="bowl criptos icon" />
        <img src="/assets/images/bowl-soup.webp" alt="bowl soup icon" />
        <img src="/assets/images/orange-lemon.webp" alt="orange lemon icon" />
      </div>
      <img
        src="/assets/images/wave-line.webp"
        alt="wave line icon"
        className={styles.waveLine}
      />
      <img
        src="/assets/images/Delishiana-white.webp"
        alt="Delishiana logo"
        className={styles.brandLogo}
      />
    </section>
  );
};

export default AboutUsSection;
