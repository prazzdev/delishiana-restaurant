import styles from "./Hero.module.scss";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

const HeroSection = () => {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.firstHeading}>
          Say goodbye to old ways of booking food
        </h1>
        <div className={styles.secondHeadingWrapper}>
          <h1 className={styles.secondHeading}>
            A Mounthful of Flavors on a Table Full of Delight
          </h1>
          <h5 className={styles.firstFloat}>Fine-Dine</h5>
          <h5 className={styles.secondFloat}>Near You</h5>
          <h5 className={styles.thirdFloat}>Opened Ever</h5>

          <img
            loading="lazy"
            src="assets/images/lemon-tea.webp"
            alt="Lemon Tea icon"
            width={100}
            className={styles.firstFloatImage}
          />
          <img
            loading="lazy"
            src="assets/images/chicken-meat.webp"
            alt="Chicken Meat icon"
            width={100}
            className={styles.secondFloatImage}
          />
        </div>
        <button className={styles.bookTableBtn}>Book a Table</button>

        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className={styles.maskGradient}
        />
      </section>
    </>
  );
};

export default HeroSection;
