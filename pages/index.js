import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import PrimaryBtnLink from "../components/PrimaryBtnLink";
import { colors } from "../constants/colors";
import NavLink from "../components/NavLink";
import LogoLink from "../components/LogoLink";
import Title from "../components/Title";
import AppCard from "../components/AppCard";
import { apps } from "../apps";
import ContactForm from "../components/ContactForm";
import Feature from "../components/Feature";
import { IoHardwareChipSharp, IoCloseSharp } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fran Studios | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.presentationContainer}>
          <div className={styles.presentationInfoContainer}>
            <h5 style={{ color: colors.LIGHT_ORANGE }}>Mobile development</h5>
            <h1 className={styles.h1}>Modern, simple and pleasant apps</h1>
            <p className={styles.infoDescription}>
              Fran Studios develops apps with the aim of solving the problems of
              our users and generating entertainment.
            </p>
            <PrimaryBtnLink
              title="See all apps"
              bgColor={colors.LIGHT_ORANGE}
              borderRadius={9999}
              to="/apps"
            />
          </div>
          <div className={styles.presentationImgContainer}>
            <img
              src="/presentation.png"
              className={styles.imgPresentation}
              alt="presentation"
            />
          </div>
        </section>
        <section className={styles.trendingAppsContainer}>
          <div className={styles.trendingTitleContainer}>
            <Title title="Currently Trending Apps" />
            <PrimaryBtnLink
              title="SEE ALL"
              borderRadius={5}
              bgColor="rgba(255,255,255,0.11)"
              to="/apps"
            />
          </div>
          <div className={styles.trendingAppsCardContainer}>
            {apps
              .filter((app) => app.trending)
              .map((app) => (
                <AppCard
                  name={app.name}
                  preview={app.preview}
                  icon={app.icon}
                  key={app.id}
                  app={app.app}
                />
              ))}
          </div>
        </section>
        <section>
          <p className={styles.dream}>
            Our dream is to create applications that solve the greatest number
            of problems and needs for our users.
          </p>
          <img src="/dream.png" className={styles.dreamImg} />
        </section>
        <h3 className={styles.dream}>Features</h3>
        <section className={styles.features}>
          <Feature
            title="Modern Apps"
            description=" Modern and nice apps for any user."
          >
            <IoHardwareChipSharp size={40} color="#ffffff" />
          </Feature>
          <Feature
            title="Modern Apps"
            description=" Modern and nice apps for any user."
          >
            <IoHardwareChipSharp size={40} color="#ffffff" />
          </Feature>
          <Feature
            title="Modern Apps"
            description=" Modern and nice apps for any user."
          >
            <IoHardwareChipSharp size={40} color="#ffffff" />
          </Feature>
        </section>
        <section className={styles.formContainer} id="contact-form">
          <h3 className={styles.dream} style={{ marginTop: 0 }}>
            Contact Us
          </h3>
          <p
            style={{
              fontSize: 13,
              fontWeight: 200,
              marginTop: "0.5rem",
              marginBottom: "2rem",
              color: "#ffffff",
            }}
          >
            Send us an email
          </p>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
