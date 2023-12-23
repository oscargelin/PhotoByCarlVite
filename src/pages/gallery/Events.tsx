import { events } from "../../assets/imageList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "../../components/Image";

const Events = () => {
  return (
    <div>
      <Header />
      <main>
        {events.map((element) => {
          return <Image jpg={element.jpg} alt={element.jpg} />;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Events;
