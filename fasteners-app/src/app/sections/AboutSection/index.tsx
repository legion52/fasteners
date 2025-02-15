import React from 'react';
import styles from './aboutSection.module.css';
import imageSrc from '../../shared/assets/image2.png';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section id="about" className={styles.aboutSectionWrapper}>
            <h2 className={styles.aboutSectionTitle}>О компании</h2>
            <div className={styles.aboutInfoSection}>
                <div className={styles.aboutCompanyDescription}>
                    Мы более 20 лет производим качественный крепеж для различных отраслей промышленности.
                    Изготовленные нами винты, винты самонарезающие, винты сегментные, болты, оси применяются в производстве автомобилей, электроустановочных изделий, электрощитового оборудования, мебели, пластиковых окон и дверей, холодильников, другой бытовой техники.
                    Мы располагаем необходимой конструкторской базой, что позволяет нам изготавливать продукцию полностью соответствующую требованиям заказчика. Можем изготовить крепеж по образцам, по назначению, по чертежам.
                </div>
                <div className={styles.aboutImageContainer}>
                    <Image src={imageSrc} alt="Описание изображения" width={500} height={500} />
                </div>
            </div>

            {/* Блок с направлениями */}
            <div className={styles.directionsSection}>
                <h3 className={styles.directionsTitle}>Наши ключевые направления</h3>
                <div className={styles.directionsGrid}>
                    <div className={styles.directionCard}>
                        <div className={styles.directionIcon}>🔩</div>
                        <h4 className={styles.directionCardTitle}>Производство крепежа</h4>
                        <p className={styles.directionCardDescription}>Производство крепежа в кратчайшие сроки.</p>
                    </div>
                    <div className={styles.directionCard}>
                        <div className={styles.directionIcon}>📐</div>
                        <h4 className={styles.directionCardTitle}>Индивидуальные заказы</h4>
                        <p className={styles.directionCardDescription}>Возможность производства по чертежам и образцам.</p>
                    </div>
                    <div className={styles.directionCard}>
                        <div className={styles.directionIcon}>✅</div>
                        <h4 className={styles.directionCardTitle}>Контроль качества</h4>
                        <p className={styles.directionCardDescription}>Продукция проходит строгий контроль качества.</p>
                    </div>
                    <div className={styles.directionCard}>
                        <div className={styles.directionIcon}>🚛</div>
                        <h4 className={styles.directionCardTitle}>Доставка и логистика</h4>
                        <p className={styles.directionCardDescription}>Быстрая доставка в регионы России.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
