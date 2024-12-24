import styles from "@/styles/Home.module.scss";
import Navbar from "../components/compounds/Navbar";
import HeroSection from "@/components/sections/Hero";
import OpenTimeSection from "@/components/sections/OpenTime";
import ExploreVarietySection from "../components/sections/ExploreVariety";
import AboutUsSection from "../components/sections/AboutUs";

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <HeroSection />
        <OpenTimeSection />
        <ExploreVarietySection />
        <AboutUsSection />
      </div>
    </>
  );
};

export default HomePage;
