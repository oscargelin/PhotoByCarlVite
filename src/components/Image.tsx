import React from "react";
import styles from "./Image.module.css";

type TImage = {
  webp: string;
  jpg: string;
  alt: string;
  header?: string;
};

const Image = ({ webp, jpg, alt, header }: TImage) => {
  return (
    <div className={styles.imgContainer}>
      <picture>
        <source srcSet={webp} type="image/webp" />
        <img src={jpg} alt={alt} decoding="async" loading="lazy" />
      </picture>
      <h2>{header}</h2>
    </div>
  );
};

export default Image;
