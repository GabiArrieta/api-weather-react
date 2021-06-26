import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  const { max, min, name, img, onClose } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cityName}>{name}</div>
      <button className={styles.btnClose} onClick={onClose}>X
      </button>
      <div className={styles.content}>
        <div>
          <span>Min</span>
          <span>{min}º</span>
        </div>
        <div>
          <span>Max</span>
          <span>{max}º</span>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="imagen del clima"
        />
      </div>
    </div>
  );
}

