import React from "react";
import Image from "../../components/Image";
import carOneWebP from "../../../public/images/cars/carOne.webp";
import carOneJpg from "../../../public/images/cars/carOne.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { cars } from "../../assets/carImages";

const Cars = () => {
  const srcSet = `${carOneWebP} 1x`; // Assuming carOneWebP is the path to your WebP image

  return (
    <div>
      <Header />
      <main>
        {cars.map((car: any) => {
          return <Image webp={car.webp} jpg={car.jpg} alt={car.alt} />;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Cars;
