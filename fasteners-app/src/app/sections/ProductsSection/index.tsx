import React, { useState } from 'react';
import styles from './productsSection.module.css';
import Image from 'next/image';

const ProductsSection = () => {
    const categories = ["Винты", "Винты самонарезающие", "Винты сегментные", "Болты", "Оси"];

    const initialProducts = [
        {
            id: 1,
            name: "Винт самонарезающий",
            description: "Изготовление крепежа с необходимыми параметрами резьбы.",
            image: "/images/productsImage/product1.jpg",
        },
        {
            id: 2,
            name: "Шуруп",
            description: "Изготовление крепежа по необходимым параметрам.",
            image: "/images/productsImage/product2.jpg",
        },
        {
            id: 3,
            name: "Винт со специальной головкой",
            description: "Изготовление метизных изделий с необходимой головкой.",
            image: "/images/productsImage/product3.jpg",
        },
        {
            id: 4,
            name: "Прессшайба с тупым концом",
            description: "Изготовления любого типа изделий по вашей документации.",
            image: "/images/productsImage/product4.jpg",
        },
    ];



    return (
        <section id="products" className={styles.productsSection}>
            <h2 className={styles.sectionTitle}>Наша продукция</h2>
            <p className={styles.sectionDescription}>Качественный крепеж для различных отраслей промышленности.</p>
            <p className={styles.sectionDescription}>
                Для ознакомления с полным каталогом продукции, пожалуйста, нажмите <a href="/catalog/produkciya_ooo_skf.pdf" download>здесь</a>.
            </p>
            <div className={styles.productsGrid}>
                {initialProducts.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            className={styles.productImage}
                            width={200}
                            height={200}
                            quality={100}
                            unoptimized
                            style={{ objectFit: 'cover' }}
                        />
                        <h3 className={styles.productName}>{product.name}</h3>
                        <p className={styles.productDescription}>{product.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductsSection;
