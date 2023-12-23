import { Link, Outlet } from "react-router-dom";
import carJpg from "../assets/images/cars/carFour.jpg";
import eventsJpg from "../assets/images/events/champagne.jpg";
import outdoorsJpg from "../assets/images/outdoors/outdoorsOne.jpg";
import randomJpg from "../assets/images/random/randomOne.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "../components/Image";

const Gallery = () => {
  return (
    <div>
      <Header />
      <main>
        <ul>
          <li>
            <Link to={"/gallery/cars"}>
              <Image jpg={carJpg} alt="" header="Cars" />
            </Link>
          </li>
          <li>
            <Link to={"/gallery/events"}>
              <Image jpg={eventsJpg} alt="" header="Events" />
            </Link>
          </li>
          <li>
            <Link to={"/gallery/outdoors"}>
              <Image jpg={outdoorsJpg} alt="" header="Outdoors" />
            </Link>
          </li>
          <li>
            <Link to={"/gallery/random"}>
              <Image jpg={randomJpg} alt="" header="Random" />
            </Link>
          </li>
        </ul>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
