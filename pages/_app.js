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
    </>
  );
}

export default MyApp;
