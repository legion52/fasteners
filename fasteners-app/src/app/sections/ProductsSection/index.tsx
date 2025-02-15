'use client';
import React, { useState } from 'react';
import styles from './productsSection.module.css';
import Image from 'next/image';
// import CategorySwitcher from '@/app/shared/ui/CategorySwitcher';

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
        // {
        //     id: 5,
        //     name: "Винт самонарезающий",
        //     description: "Самонарезающие винты для различных материалов.",
        //     image: "/images/productsImage/product5.jpg",
        // },
    ];

    const [products, setProducts] = useState(initialProducts);

    const handleCategoryChange = (category: string) => {
        // Перемешиваем продукты
        const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
        setProducts(shuffledProducts);

    };

    return (
        <section id="products" className={styles.productsSection}>
            <h2 className={styles.sectionTitle}>Наша продукция</h2>
                <p className={styles.sectionDescription}>Качественный крепеж для различных отраслей промышленности.</p>
                <p className={styles.sectionDescription}>Для ознакомления с полным каталогом продукции, пожалуйста, обратитесь к нашим менеджерам.</p>
            {/* <CategorySwitcher categories={categories} onCategoryChange={handleCategoryChange} /> */}
            <div className={styles.productsGrid}>
                {products.map((product) => (
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
