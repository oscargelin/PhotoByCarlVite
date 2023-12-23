import React from "react";
import Image from "../../components/Image";
import carOneWebP from "../../../public/images/cars/carOne.webp";
import carOneJpg from "../../../public/images/cars/carOne.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { cars } from "../../assets/carImages";
import { TImage } from "../../assets/types";

const Cars = () => {
  return (
    <div>
      <Header />
      <main>
        {cars.map((car: TImage) => {
          return <Image webp={car.webp} jpg={car.jpg} alt={car.alt} />;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Cars;
