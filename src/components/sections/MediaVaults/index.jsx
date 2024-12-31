import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import styles from "./MediaVaults.module.scss";

const articleData = [
  {
    image: "/assets/images/article-image.webp",
    date: "16 Aug, 2024",
    desc: "Lorem Ipsum: It is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/assets/images/article-image.webp",
    date: "16 Aug, 2024",
    desc: "Lorem Ipsum: It is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/assets/images/article-image.webp",
    date: "16 Aug, 2024",
    desc: "Lorem Ipsum: It is simply dummy text of the printing and typesetting industry.",
  },
];

const linkData = [
  {
    icon: <Mail size={23} />,
    text: "test@example.com",
  },
  {
    icon: <Facebook size={23} />,
    text: "@loremipsum",
  },
  {
    icon: <Phone size={23} />,
    text: "+62 876 1234 5678",
  },
  {
    icon: <Instagram size={23} />,
    text: "@loremipsum",
  },
];

const MediaVaultsSection = () => {
  return (
    <section className={styles.mediaVaults}>
      <h1 className={styles.mediaVaultsTitle}>Media Vaults</h1>

      <div className={styles.articleWrapper}>
        {articleData.map((article, index) => (
          <div className={styles.articleCard}>
            <div className={styles.articleHeader}>
              <img
                src="/assets/images/dot-background-1-1.webp"
                alt="Dot bg"
                className={styles.dotBackground}
              />
              <img
                src={article.image}
                className={styles.articleImage}
                alt="article image"
              />
            </div>
            <div className={styles.articleBody}>
              <h4 className={styles.articleDate}>{article.date}</h4>
              <h4 className={styles.articleDesc}>{article.desc}</h4>
              <button className={styles.exploreBtn}>Explore</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.infoCard}>
          <div className={styles.wrapper}>
            <div className={styles.infoHeader}>
              <div>
                <h1>Opening Hours</h1>
              </div>
            </div>
            <div className={styles.infoBody}>
              <h1 className={styles.day}>
                <span>●</span>
                <h1>Monday - Friday</h1>
                <span>●</span>
              </h1>
              <div className={styles.hours}>
                <div className={styles.session}>
                  <h1 className={styles.title}>Lunch</h1>
                  <h1 className={styles.hour}>12PM - 3PM</h1>
                </div>
                <div className={styles.session}>
                  <h1 className={styles.title}>Dinner</h1>
                  <h1 className={styles.hour}>5PM - 10PM</h1>
                </div>
              </div>
              <div className={styles.closeDay}>
                <span>● Saturday & Sunday Closed ●</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.wrapper}>
            <div className={styles.infoHeader}>
              <div>
                <h1>Reach To Us</h1>
              </div>
            </div>
            <div className={styles.infoBody}>
              {linkData.map((link, index) => (
                <div className={styles.myLink} key={index}>
                  <div className={styles.icon}>{link.icon}</div>
                  <h3 className={styles.text}>{link.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaVaultsSection;
