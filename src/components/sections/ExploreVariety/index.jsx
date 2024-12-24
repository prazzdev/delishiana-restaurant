import { Check } from "lucide-react";
import styles from "./ExploreVariety.module.scss";

const placeData = [
  {
    name: "The Mills",
    city: "Rawalpindi",
    location: "Besides Savour Foods Raja Bazar, Rawalpindi",
    pin: "1100041",
    phone: "0300-0000000",
    image: "/assets/images/the-mills-place.webp",
  },
  {
    name: "The Mills",
    city: "Lahore",
    location: "Besides Savour Foods Raja Bazar, Rawalpindi",
    pin: "1100041",
    phone: "0300-0000000",
    image: "/assets/images/the-mills-place.webp",
  },
  {
    name: "The Mills",
    city: "Islamabad",
    location: "Besides Savour Foods Raja Bazar, Rawalpindi",
    pin: "1100041",
    phone: "0300-0000000",
    image: "/assets/images/the-mills-place.webp",
  },
  {
    name: "The Mills",
    city: "Karachi",
    location: "Besides Savour Foods Raja Bazar, Rawalpindi",
    pin: "1100041",
    phone: "0300-0000000",
    image: "/assets/images/the-mills-place.webp",
  },
];

const ExploreVarietySection = () => {
  return (
    <>
      <section className={styles.exploreVariety}>
        <div className={styles.exploreVarietyText}>
          <h1>Explore a Variety Of Cuisines at</h1>
          <h1>Our Many Restaurant Destinations.</h1>
        </div>

        <div className={styles.varietyOptions}>
          <div className={styles.optionWrapper}>
            <div>
              <Check size={30} className={styles.check} />
            </div>
            <h3>Dine-in</h3>
          </div>
          <div className={styles.optionWrapper}>
            <div>
              <Check size={30} className={styles.check} />
            </div>
            <h3>Order Online</h3>
          </div>
        </div>

        <div className={styles.placesContainer}>
          {placeData.map((place, index) => (
            <div className={styles.placeWrapper}>
              <div className={styles.placeDescription}>
                <div>
                  <h1 className={styles.placeName}>{place.name}</h1>
                  <h3 className={styles.placeCity}>{place.city}</h3>
                </div>
                <div>
                  <h4 className={styles.placeLocation}>
                    Location: {place.location}.
                  </h4>
                  <h3 className={styles.pinNumber}>PIN-{place.pin}</h3>
                  <h3 className={styles.phoneNumber}>{place.phone}</h3>
                </div>
                <div>
                  <button className={styles.button}>Book a Table</button>
                  <button className={styles.button}>Order Online</button>
                </div>
              </div>
              <div className={styles.placeImage}>
                <img
                  loading="lazy"
                  src="/assets/images/dot-background-1-1.webp"
                  alt="dot background"
                  className={styles.backgroundImage}
                />

                <figure>
                  <img
                    loading="lazy"
                    src={place.image}
                    alt={`${place.image} image`}
                  />
                </figure>
              </div>

              {/* <div className={styles.verticalLine}>
                {Array.from({ length: 12 }, (_, i) => (
                  <>
                    <span>•</span>{" "}
                    <span key={i + 1}>{placeData[index].city} </span>
                  </>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExploreVarietySection;
