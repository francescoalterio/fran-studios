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
          height: 100,
          backgroundColor: "#000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Footer
      </footer>
    </>
  );
}

export default MyApp;
