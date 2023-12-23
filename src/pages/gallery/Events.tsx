import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { events } from "../../assets/eventImages";
import Image from "../../components/Image";

const Events = () => {
  return (
    <div>
      <Header />
      <main>
        {events.map((element) => {
          return (
            <Image webp={element.webp} jpg={element.jpg} alt={element.jpg} />
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Events;
