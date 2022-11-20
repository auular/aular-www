import { Header } from "../../components/Header";
import { BlueButton } from "../../components/BlueButton";
import Shadow from "./components/Shadow";
import MapSearch from "./components/MapSearch";
import Link from "next/link";
import OurServices from "./components/OurServices";
import Feedback from "./components/Feedback";
import Faq from "./components/Faq";
import styles from "./Home.module.scss";
import Footer from "./components/Footer";

export default function Home({ mapboxToken }) {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home__container}>
        <div className={styles.home__hero}>
          <div className={styles.home__hero_content}>
            <h1>Vai viajar e não sabe com quem deixar seu pet?</h1>
            <p>
              Para nós do AuuLar, o bem-estar do seu pet vem sempre em
              <span> primeiro lugar.</span>
            </p>
            <Link href="/register/user">
              <BlueButton value="Cadastre-se" />
            </Link>
          </div>
          <Shadow />
        </div>
      </div>
      <MapSearch mapboxToken={mapboxToken} />
      <OurServices />
      <Feedback />
      <Faq />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      mapboxToken: process.env.MAPBOX_ACCESS_TOKEN,
    },
  };
};
