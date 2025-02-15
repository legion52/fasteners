'use client';
import React from 'react';
import styles from './partnersSection.module.css';

const partners = [
  { id: 1, name: "NASA", logo: "/images/partners/partner1.jpg", url: "https://www.nasa.gov" },
  { id: 2, name: "Google", logo: "/images/partners/partner2.jpg", url: "https://www.google.com" },
  { id: 3, name: "Sukhoi", logo: "/images/partners/partner3.jpg" },
  // { id: 4, name: "LG", logo: "https://logos-world.net/wp-content/uploads/2020/05/LG-Symbol.png", url: "https://www.lg.com" },
  // { id: 5, name: "BMW", logo: "/images/productsImage/product1.jpg", url: "https://www.bmw.com" },
  // { id: 6, name: "McDonald's", logo: "/images/productsImage/product1.jpg", url: "https://www.mcdonalds.com" },
  // Добавьте других партнёров
];

const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className={styles.partnersSection}>
      <h2 className={styles.sectionTitle}>Наши партнёры</h2>
      <p className={styles.sectionDescription}>
        Мы гордимся сотрудничеством с ведущими компаниями в отрасли.
      </p>
      <div className={styles.partnersGrid}>
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.partnerCard}
          >
            <img src={partner.logo} alt={partner.name} className={styles.partnerLogo} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
