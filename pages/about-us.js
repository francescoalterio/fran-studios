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
          <Title title="erwe werwe" />
          <p className={styles.description}>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas Letraset, las cuales contenian pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
            Ipsum.
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
