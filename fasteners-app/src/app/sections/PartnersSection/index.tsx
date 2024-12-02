'use client';

import React from 'react';
import styles from './partnersSection.module.css';

const partners = [
  { id: 1, name: "NASA", logo: "https://th.bing.com/th/id/R.dfe000c4d39e10adeac73e968d0081c0?rik=2qecWrg5GwkLaA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnasa-logo-png-nasa-logo-1664.png&ehk=d%2bgvuoNz%2b0udsBSxL%2bAGF0N%2f1tWoj4H6GaKOJhRCIyQ%3d&risl=&pid=ImgRaw&r=0", url: "https://www.nasa.gov" },
  { id: 2, name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png", url: "https://www.google.com" },
  { id: 3, name: "Sukhoi", logo: "https://www.marefa.org/w/images/thumb/d/d6/%D0%A1%D1%83%D1%85%D0%BE%D0%B9_logo.svg/640px-%D0%A1%D1%83%D1%85%D0%BE%D0%B9_logo.svg.png", url: "https://www.sukhoi.org" },
  { id: 4, name: "LG", logo: "https://logos-world.net/wp-content/uploads/2020/05/LG-Symbol.png", url: "https://www.lg.com" },
  { id: 5, name: "BMW", logo: "https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png", url: "https://www.bmw.com" },
  { id: 6, name: "McDonald's", logo: "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png", url: "https://www.mcdonalds.com" },
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
