'use client';
import React from 'react';
import styles from './ScrollStrip.module.css'; // Подключаем стили

const ScrollStrip = () => {
  const imageSrc = '/images/Drawings.png'; // Путь к вашему PNG

  return (
    <div className={styles.svgScrollContainer}>
      <div className={styles.scrollingPng}>
        <img src={imageSrc} alt="scroll-item-1" className={styles.image} />
        <img src={imageSrc} alt="scroll-item-2" className={styles.image} />
        <img src={imageSrc} alt="scroll-item-3" className={styles.image} />
        <img src={imageSrc} alt="scroll-item-3" className={styles.image} />
        <img src={imageSrc} alt="scroll-item-3" className={styles.image} />
      </div>
    </div>
  );
};

export default ScrollStrip;
