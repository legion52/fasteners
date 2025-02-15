'use client';

import React from 'react';
import styles from './footer.module.css';
import Logo from '../../shared/assets/icon/logo.svg';
// import Logo from '../shared/assets/icon/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Логотип и описание компании */}
        <div className={styles.logoSection}>
          <Logo className={styles.logo} />
          <p className={styles.companyDescription}>
            Мы производим качественный крепеж под маркой Фастенерс с 2004 года.
          </p>
        </div>

        {/* Навигация */}
        <div className={styles.navigation}>
          <h4>Навигация</h4>
          <ul className={styles.navList}>
            <li><a href="#home">Главная</a></li>
            <li><a href="#about">О компании</a></li>
            <li><a href="#products">Продукция</a></li>
            <li><a href="#partners">Партнеры</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </div>

        {/* Контактная информация */}
        <div className={styles.contactInfo}>
          <h4>Контакты</h4>
          <p>Телефон: </p>
          <p>+7 (499) 400-50-01</p>
          <p>Email: </p>
          <p>info@fasteners.com</p>
          <p>Адрес: </p>
          <p>г. Москва, ул. Примерная, д. 1</p>
        </div>
      </div>

      {/* Политика конфиденциальности */}
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Фастенерс. Все права защищены.</p>
        <p><a href="/privacy">Политика конфиденциальности</a> | <a href="/terms">Условия использования</a></p>
      </div>
    </footer>
  );
};

export default Footer;
