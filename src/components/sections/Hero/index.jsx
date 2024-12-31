import styles from "./Hero.module.scss";
import GridPattern from "@/components/ui/grid-pattern";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className={styles.hero}>
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className={styles.maskGradient}
        />

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

        <div className={styles.snapOfFoodWrapper}>
          <div className={styles.snapOfFoodHeader}>
            <div>
              <ArrowDown size={30} />
            </div>
            <h1 className={styles.snapOfFoodText}>
              <span className={styles.word}>
                <span className={styles.bigLetter}>S</span>naps
              </span>
              <span className={styles.word}>
                <span className={styles.bigLetter}>O</span>f
              </span>
              <span className={styles.word}>
                <span className={styles.bigLetter}>F</span>ood
              </span>
              <span className={styles.word}>
                <span className={styles.bigLetter}>F</span>rom
              </span>
              <span className={styles.word}>
                <span className={styles.bigLetter}>O</span>ur
              </span>
              <span className={styles.word}>
                <span className={styles.bigLetter}>F</span>oodies
              </span>
              <span className={styles.word}>
                <span className={styles.bigLetter}>P</span>atooties
              </span>
            </h1>
            <div>
              <ArrowDown size={30} />
            </div>
          </div>
          <div className={styles.snapOfFoodSlideWrapper}>
            <div className={styles.snapOfFoodSlideItemWrapper}>
              <div className={`${styles.partOfSlide} ${styles.left}`}>
                <div className={styles.slideItem}>
                  <img
                    src="/assets/images/food-slide-1.webp"
                    alt="Food in Slide image"
                    className={styles.snapOfFoodImage}
                  />
                  <div className={styles.caption}>
                    <h1 className={styles.title}>From FOXILYZE</h1>
                    <h5 className={styles.date}>On 22/12</h5>
                  </div>
                </div>
              </div>
              <div className={`${styles.partOfSlide} ${styles.right}`}>
                <div className={styles.slideItem}>
                  <img
                    src="/assets/images/food-slide-1.webp"
                    alt="Food in Slide image"
                    className={styles.snapOfFoodImage}
                  />
                  <div className={styles.caption}>
                    <h1 className={styles.title}>From FOXILYZE</h1>
                    <h5 className={styles.date}>On 22/12</h5>
                  </div>
                </div>
                <div className={styles.slideItem}>
                  <img
                    src="/assets/images/food-slide-1.webp"
                    alt="Food in Slide image"
                    className={styles.snapOfFoodImage}
                  />
                  <div className={styles.caption}>
                    <h1 className={styles.title}>From FOXILYZE</h1>
                    <h5 className={styles.date}>On 22/12</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snapOfFoodSlideBtnWrapper}>
              <button className={styles.slideBtn}>
                <ArrowLeft size={30} />
              </button>
              <button className={styles.slideBtn}>
                <ArrowRight size={30} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
