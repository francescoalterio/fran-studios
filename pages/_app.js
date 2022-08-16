import BackgroundGradient from "../components/BackgroundGradient";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <BackgroundGradient>
        <Component {...pageProps} />
      </BackgroundGradient>
      <Footer />
    </>
  );
}

export default MyApp;
