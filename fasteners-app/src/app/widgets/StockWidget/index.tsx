'use client';

import React from 'react';
import styles from './stockWidget.module.css';
import imageSrc from '../../shared/assets/image.png';
import Image from 'next/image';

const StockWidget: React.FC = () => {
    const products = [
        {
            id: 1,
            name: 'Винт сегментный',
            image: '/images/products/screw1.png',
            link: '#',
        },
        {
            id: 2,
            name: 'Винт самонарезающий',
            image: '/images/products/screw2.png',
            link: '#',
        },
        {
            id: 3,
            name: 'Болт стальной',
            image: '/images/products/bolt1.png',
            link: '#',
        },
        {
            id: 4,
            name: 'Болт стальной',
            image: '/images/products/bolt1.png',
            link: '#',
        },
        {
            id: 5,
            name: 'Болт стальной',
            image: '/images/products/bolt1.png',
            link: '#',
        },
        {
            id: 6,
            name: 'Винт сегментный',
            image: '/images/products/screw1.png',
            link: '#',
        },
        {
            id: 7,
            name: 'Винт самонарезающий',
            image: '/images/products/screw2.png',
            link: '#',
        },
        {
            id: 8,
            name: 'Болт стальной',
            image: '/images/products/bolt1.png',
            link: '#',
        },
        {
            id: 9,
            name: 'Болт стальной',
            image: '/images/products/bolt1.png',
            link: '#',
        },
        {
            id: 10,
            name: 'Болт стальной',
            image: '/images/products/bolt1.png',
            link: '#',
        },
    ];

    return (
        <div className={styles.stockWidget}>
            <h2 className={styles.widgetTitle}>Крепеж в наличии, узнайте цены</h2>
            <div className={styles.productGrid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        🔩
                        {/* <Image src={imageSrc} alt={product.name} className={styles.productImage} height={100}/> */}
                        {/* <img src={product.image} alt={product.name} className={styles.productImage} /> */}
                        <h3 className={styles.productName}>{product.name}</h3>
                        <a href={product.link} className={styles.productLink}>Узнать цену</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StockWidget;
