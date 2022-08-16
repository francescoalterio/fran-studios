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
import { IoLayers, IoDiamondSharp, IoEarthOutline } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <title>Fran Studios | Home</title>
        <meta property="og:title" content="Fran Studios | Home" />

        <meta
          name="description"
          content="Fran Studios is a developer of modern and simple mobile applications."
        />
        <meta
          property="og:description"
          content="Fran Studios is a developer of modern and simple mobile applications."
        />

        <meta property="og:url" content="https://franstudios.vercel.app/" />
        <meta
          property="og:image"
          content="https://franstudios.vercel.app/logo.png"
        />

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
            <h3 className={styles.trendingAppsTitle}>
              Currently Trending Apps
            </h3>
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
                  styles={{ minWidth: 140 }}
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
        <h3 className={styles.featuresTitle}>Features</h3>
        <section className={styles.features}>
          <Feature
            title="Modern Apps"
            description="Modern, pleasant and easy-to-use applications for any user."
          >
            <IoDiamondSharp size={40} color="#ffffff" />
          </Feature>
          <Feature
            title="Variety"
            description="All types of apps focused on solving the greatest number of problems."
          >
            <IoLayers size={40} color="#ffffff" />
          </Feature>
          <Feature
            title="International"
            description="The apps are distributed internationally for all audiences."
          >
            <IoEarthOutline size={40} color="#ffffff" />
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
