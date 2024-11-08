'use client';

import React from 'react';
import styles from './partnersSection.module.css';

const partners = [
  { id: 1, name: "Nasa", logo: "https://th.bing.com/th/id/R.dfe000c4d39e10adeac73e968d0081c0?rik=2qecWrg5GwkLaA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnasa-logo-png-nasa-logo-1664.png&ehk=d%2bgvuoNz%2b0udsBSxL%2bAGF0N%2f1tWoj4H6GaKOJhRCIyQ%3d&risl=&pid=ImgRaw&r=0", url: "https://partner1.com" },
  { id: 2, name: "Google", logo: "https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0", url: "https://partner2.com" },
  { id: 3, name: "Sukhoi", logo: "https://www.marefa.org/w/images/thumb/d/d6/%D0%A1%D1%83%D1%85%D0%BE%D0%B9_logo.svg/640px-%D0%A1%D1%83%D1%85%D0%BE%D0%B9_logo.svg.png", url: "https://partner3.com" },
  { id: 3, name: "LG", logo: "https://logos-world.net/wp-content/uploads/2020/05/LG-Symbol.png", url: "https://partner3.com" },
  { id: 3, name: "BMW", logo: "https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png", url: "https://partner3.com" },
  { id: 3, name: "Mackdonalds", logo: "https://th.bing.com/th/id/R.3c2c48065307a242d411ec3c8f7a8525?rik=fn60HReJkEZrLQ&riu=http%3a%2f%2f1000marcas.net%2fwp-content%2fuploads%2f2019%2f11%2fMcDonalds-logo.png&ehk=CkPH%2bbu10fkhx0lSQxSETGj%2b41rOms4WvdrdtX6c5Vg%3d&risl=&pid=ImgRaw&r=0", url: "https://partner3.com" },
  // Добавьте других партнёров
];

const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className={styles.partnersSection}>
      <h2 className={styles.sectionTitle}>Наши партнеры</h2>
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
