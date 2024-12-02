import React from 'react';
import styles from './ScrollStrip.module.css';

interface IScrollTrip {
  direction?: 'left' | 'right';
}

const ScrollStrip: React.FC<IScrollTrip> = ({ direction = 'left' }) => {
  const imageSrc = '/images/Drawings.png';

  // Создаем массив изображений и дублируем его
  const images = [1, 2, 3, 4, 5];
  const allImages = [...images, ...images]; // Дублируем изображения

  return (
    <div
      className={`${
        direction === 'left'
          ? styles.svgScrollContainer
          : styles.svgScrollContainerRight
      }`}
    >
      <div
        className={`${styles.scrollingPng} ${
          direction === 'left' ? styles.scrollLeft : styles.scrollRight
        }`}
      >
        {allImages.map((img, index) => (
          <img
            key={index}
            src={imageSrc}
            alt={`scroll-item-${img}`}
            className={styles.image}
            draggable="false"
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollStrip;
