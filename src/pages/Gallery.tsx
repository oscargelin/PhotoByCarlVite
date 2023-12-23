import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import carWebp from "../../public/images/cars/carOne.webp";
import carJpg from "../../public/images/cars/carOne.jpg";
import randomWebp from "../../public/images/random/randomOne.webp";
import randomJpg from "../../public/images/random/randomOne.jpg";
import eventsWebp from "../../public/images/events/champagne.webp";
import eventsJpg from "../../public/images/events/champagne.jpg";
import outdoorsWebp from "../../public/images/outdoors/outdoorsOne.webp";
import outdoorsJpg from "../../public/images/outdoors/outdoorsOne.jpg";

const Gallery = () => {
  return (
    <div>
      <Header />
      <main>
        <ul>
          <li>
            <Link to={"/gallery/cars"}>
              <Image webp={carWebp} jpg={carJpg} alt="" header="Cars" />
            </Link>
          </li>
          <li>
            <Link to={"/gallery/events"}>
              <Image webp={eventsWebp} jpg={eventsJpg} alt="" header="Events" />
            </Link>
          </li>
          <li>
            <Link to={"/gallery/outdoors"}>
              <Image
                webp={outdoorsWebp}
                jpg={outdoorsJpg}
                alt=""
                header="Outdoors"
              />
            </Link>
          </li>
          <li>
            <Link to={"/gallery/random"}>
              <Image webp={randomWebp} jpg={randomJpg} alt="" header="Random" />
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
