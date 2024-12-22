import styles from "@/styles/Home.module.scss";
import Navbar from "../components/compounds/Navbar";
import HeroSection from "../components/sections/Hero";

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
};

export default HomePage;
