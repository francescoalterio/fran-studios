import React from "react";
import PrimaryBtnLink from "../components/PrimaryBtnLink";
import Title from "../components/Title";
import { colors } from "../constants/colors";
import styles from "../styles/AboutUS.module.css";

function AboutUs() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.iCircleSection}>
          <div
            className={styles.iCircleContainer}
            style={{ backgroundColor: colors.LIGHT_ORANGE }}
          >
            <img src="/yocirculo.png" className={styles.iCircleImg} />
          </div>
        </section>
        <section className={styles.descriptionContainer}>
          <Title title="Fran Studios" />
          <p className={styles.description} style={{ marginTop: "2rem" }}>
            Hello! My name is Francesco Alterio, I am from Venezuela. In the
            year 2020 a passion for programming awoke in me, I began to
            experience different fields such as video game programming, web
            programming, etc. At one point I realized all the potential that
            programming has and decided to dedicate myself to this field.
          </p>
          <p className={styles.description} style={{ marginBottom: "2rem" }}>
            Fran Studios was born from the idea of ​​creating a personal brand
            on mobile application development. Simple, pleasant apps that solve
            user problems directly, whether they are tools or entertainment.
          </p>
          <PrimaryBtnLink
            title="Go to my Portfolio"
            bgColor={colors.LIGHT_ORANGE}
            borderRadius={5}
            to="https://francescoalterio.vercel.app/"
          />
        </section>
      </main>
    </>
  );
}

export default AboutUs;
