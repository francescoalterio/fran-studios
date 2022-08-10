import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import PrimaryBtnLink from "../components/PrimaryBtnLink";
import { colors } from "../constants/colors";
import NavLink from "../components/NavLink";
import LogoLink from "../components/LogoLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <LogoLink />
        <div>
          <NavLink title="Home" to="" />
          <NavLink title="Apps" to="apps" />
          <NavLink title="About us" to="about-us" />

          <PrimaryBtnLink
            title="Contact us"
            bgColor={colors.LIGHT_ORANGE}
            borderRadius={5}
          />
        </div>
      </nav>
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </>
  );
}
