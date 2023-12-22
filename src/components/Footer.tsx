import React from "react";
import Styles from "./Footer.module.css";
import InstaSvg from "../assets/InstaSvg";
import PinterestSvg from "../assets/PinterestSvg";
import CarSvg from "../assets/CarSvg";
const Footer = () => {
  return (
    <footer>
      <div className={Styles.carSvg}>
        <div className={Styles.carFlame}></div>
        <CarSvg />
      </div>
      <div className={Styles.traffiLightContainer}>
        <div className={Styles.trafficLightOne}></div>
        <div className={Styles.trafficLightTwo}></div>
        <div className={Styles.trafficLightThree}></div>
      </div>
      <div>
        <ul className={Styles.flexContainerOne}>
          <a href="mailto: carlgelin@gmail.com" className={Styles.link}>
            <li>carlgelin@gmail.com</li>
          </a>
          <li>
            <a href="tel:+46725252522" className={Styles.link}>
              +46 725 252 522
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className={Styles.flexContainerTwo}>
          <li>
            <a
              href="https://www.instagram.com/aphotographersperspective/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstaSvg />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer">
              <PinterestSvg />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
