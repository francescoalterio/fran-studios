import React from "react";
import Head from "next/head";
import styles from "../../styles/Terms.module.css";

function pokebook() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <title>Fran Studios | Cocktail Library Terms</title>
        <meta
          property="og:title"
          content="Fran Studios | Cocktail Library Privacy policies"
        />

        <meta name="description" content="Cocktail Library Privacy policies" />
        <meta property="og:description" content="Cocktail Library Privacy policies" />

        <meta property="og:url" content="https://franstudios.vercel.app/" />
        <meta
          property="og:image"
          content="https://franstudios.vercel.app/logo.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Privacy policies</h1>
        <ul>
          <li className={styles.li}>
            Cocktail Library does not collect any personal data from users.
          </li>
          <li className={styles.li}>Cocktail Library does not log IP addresses.</li>
          <li className={styles.li}>
            Cocktail Library does not access the contact data of the device.
          </li>
          <li className={styles.li}>
            Cocktail Library does not access users email accounts.
          </li>
          <li className={styles.li}>
            Cocktail Library does not save data related to the device.
          </li>
          <li className={styles.li}>
            Fran Studios, not Google, is solely responsible for the content of
            Fran Studios.
          </li>
          <li className={styles.li}>
            For more information about this privacy policy, you can contact
            francescoalteriog@gmail.com
          </li>
        </ul>
      </main>
    </>
  );
}

export default pokebook;
