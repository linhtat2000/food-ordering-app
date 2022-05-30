import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Feature.module.css";

const Feature = () => {
  const [index, setIndex] = useState(0);
  const images = ["/img/feature.png", "/img/feature2.png", "/img/feature3.png"];

  const handleArrow = (direction) => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "right") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("left")}
      >
        <Image
          src="/img/arrow.png"
          alt="arrow"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `transleX(${-100 * index}vw)` }}
      >
        {images.map((img, index) => {
          <div className={styles.imgContainer}>
            <Image
              key={index}
              src={img}
              alt={`feature pizza ${index}`}
              layout="fill"
              objectFit="contain"
            />
          </div>;
        })}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("right")}
      >
        <Image
          src="/img/arrow.png"
          alt="arrow"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Feature;
