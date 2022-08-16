import React from "react";
import Head from "next/head";
import Title from "../components/Title";
import styles from "../styles/Apps.module.css";
import { apps } from "../apps";
import AppCard from "../components/AppCard";

function Apps() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <title>Fran Studios | All Apps</title>
        <meta property="og:title" content="Fran Studios | Home" />

        <meta
          name="description"
          content="All mobile apps developed by Fran Studios."
        />
        <meta
          property="og:description"
          content="All mobile apps developed by Fran Studios."
        />

        <meta property="og:url" content="https://franstudios.vercel.app/" />
        <meta
          property="og:image"
          content="https://franstudios.vercel.app/logo.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ marginTop: "5rem" }}>
        <Title title="All Apps" />
        <section className={styles.appsContainer}>
          {apps.map((app) => (
            <AppCard
              name={app.name}
              preview={app.preview}
              icon={app.icon}
              key={app.id}
              app={app.app}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Apps;
