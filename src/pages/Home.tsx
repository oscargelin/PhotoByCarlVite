import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImg from "../assets/images/cars/carFour.jpg";

const Home = () => {
  return (
    <div>
      <img
        src={bgImg}
        style={{
          position: "absolute",
          height: "100vh",
          zIndex: "-1",
          objectFit: "cover",
        }}
      />
      <Header />
      <main className={styles.flexBox}>
        <Link to={"/gallery"} className={styles.btn}>
          View Gallery
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
