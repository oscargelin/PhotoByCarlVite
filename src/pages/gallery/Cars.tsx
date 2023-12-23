import { cars } from "../../assets/imageList";
import { TImage } from "../../assets/types";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "../../components/Image";

const Cars = () => {
  return (
    <div>
      <Header />
      <main>
        {cars.map((car: TImage) => {
          return <Image jpg={car.jpg} alt={car.alt} />;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Cars;
