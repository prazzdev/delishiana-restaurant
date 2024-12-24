import styles from "./OpenTime.module.scss";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
const OpenTimeSection = () => {
  return (
    <>
      <section className={styles.openTime}>
        <div className={styles.openTimeText}>
          <h1>Open From Monday to Sunday</h1>
          <h3>11PM - 7PM</h3>
        </div>
        <DotPattern
          width={30}
          height={30}
          cx={1}
          cy={1}
          cr={1}
          className={cn()}
        />
      </section>
    </>
  );
};

export default OpenTimeSection;
