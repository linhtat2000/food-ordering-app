import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find our restaurants</h1>
          <p className={styles.text}>
            123 New York St
            <br />
            Lorem ipsum dolor sit.
            <br /> (084) 045 4897
          </p>
          <p className={styles.text}>
            123 New York St
            <br />
            Lorem ipsum dolor sit.
            <br /> (084) 045 4897
          </p>
          <p className={styles.text}>
            123 New York St
            <br />
            Lorem ipsum dolor sit.
            <br /> (084) 045 4897
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working hours</h1>
          <p className={styles.text}>
            Monday until Friday
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            Saturday - Sunday
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
