//@ts-nocheck
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className={styles.test}>
      <Header />
      <main>
        <Link to={"/gallery"} className={styles.btn}>
          View Gallery
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
