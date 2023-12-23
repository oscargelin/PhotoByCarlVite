import { randomImages } from "../../assets/imageList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "../../components/Image";

const Random = () => {
  return (
    <div>
      <Header />
      <main>
        {randomImages.map((element) => {
          return <Image jpg={element.jpg} alt={element.jpg} />;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Random;
