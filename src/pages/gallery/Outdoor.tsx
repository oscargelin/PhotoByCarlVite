import { outdoorImages } from "../../assets/imageList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "../../components/Image";

const Outdoor = () => {
  return (
    <div>
      <Header />
      <main>
        {outdoorImages.map((element) => {
          return <Image jpg={element.jpg} alt={element.jpg} />;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Outdoor;
