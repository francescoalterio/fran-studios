import BackgroundGradient from "../components/BackgroundGradient";
import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <BackgroundGradient>
        <Component {...pageProps} />
      </BackgroundGradient>
      <footer
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "#000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 13,
        }}
      >
        Copyright ® 2022 Fran Studios All rights Recerved
      </footer>
    </>
  );
}

export default MyApp;
