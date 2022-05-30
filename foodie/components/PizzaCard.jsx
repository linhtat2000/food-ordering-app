import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500px" height="500px" />
      <h1 className={styles.title}>Pizzaaa</h1>
      <span className={styles.price}>$29.99</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta fugit
        odit dolorum!
      </p>
    </div>
  );
};

export default PizzaCard;
