'use client';

import React, { useState } from 'react';
import styles from './contactsSection.module.css';

const ContactsSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Отправка данных формы:', formData);
  };

  return (
    <section className={styles.contactsSection} id="contacts">
      <h2 className={styles.sectionTitle}>Свяжитесь с нами</h2>
      <p className={styles.sectionDescription}>Заполните форму или воспользуйтесь контактами ниже для связи с нами.</p>

      <div className={styles.contactInfo}>
        <div className={styles.contactTitle}>
        <span>Телефон:</span>
        <span>E-mail:</span>
        <span>Адрес:</span>
        </div>
        <div className={styles.contactText}>
        <span>+7 (499) 400-50-01</span>
        <span>sale.fasteners@mail.ru</span>
        <span>г. Москва, ул. Примерная, д. 1</span>
        </div>
        {/* <div className={styles.contactText}>
          <span>Телефон:</span>
          <span>+7 (499) 400-50-01</span>
        </div>
        <div className={styles.contactText}>
          <span>E-mail:</span>
          <span>sale.fasteners@mail.ru</span>
        </div>
        <div className={styles.contactText}>
          <span>Адрес:</span>
          <span>г. Москва, ул. Примерная, д. 1</span>
        </div> */}
      </div>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ваш email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Ваш телефон"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>Отправить</button>
      </form>

      {/* Карта */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CDtNyPij"
          width="100%"
          height="300"
          frameBorder="0"
          title="Карта"
        ></iframe>
      </div>

    </section>
  );
};

export default ContactsSection;
