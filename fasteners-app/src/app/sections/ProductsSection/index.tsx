'use client'
import React from 'react';
import styles from './productsSection.module.css';
import imageSrc from '../../shared/assets/image.png';
import Image from 'next/image';
import CategorySwitcher from '@/app/shared/ui/CategorySwitcher';
const ProductsSection = () => {
    const categories = [
        "Винты", 
        "Винты самонарезающие", 
        "Винты сигментные",
        "Болты",
        "Оси",
    ];
    const products = [
        {
            id: 1,
            name: "Винт сегментный",
            description: "Сегментные винты высокого качества.",
            image: "../../shared/assets/image.png",
        },
        {
            id: 2,
            name: "Винт самонарезающий",
            description: "Самонарезающие винты для различных материалов.",
            image: "/images/products/screw.png",
        },
        {
            id: 3,
            name: "Винт самонарезающий",
            description: "Самонарезающие винты для различных материалов.",
            image: "/images/products/screw.png",
        },
        {
            id: 4,
            name: "Винт самонарезающий",
            description: "Самонарезающие винты для различных материалов.",
            image: "/images/products/screw.png",
        },
        {
            id: 5,
            name: "Винт сегментный",
            description: "Сегментные винты высокого качества.",
            image: "../../shared/assets/image.png",
        },
        {
            id: 6,
            name: "Винт самонарезающий",
            description: "Самонарезающие винты для различных материалов.",
            image: "/images/products/screw.png",
        },
        {
            id: 7,
            name: "Винт самонарезающий",
            description: "Самонарезающие винты для различных материалов.",
            image: "/images/products/screw.png",
        },
        {
            id: 8,
            name: "Винт самонарезающий",
            description: "Самонарезающие винты для различных материалов.",
            image: "/images/products/screw.png",
        },
        // Добавьте остальные товары
    ];

    const handleCategoryChange = (category: string) => {
        console.log(`Выбранная категория: ${category}`);
        // Здесь можно добавить логику для загрузки товаров по выбранной категории
    };

    return (
        <section id="products" className={styles.productsSection}>
            <h2 className={styles.sectionTitle}>Наша продукция</h2>
            <p className={styles.sectionDescription}>Качественный крепеж для различных отраслей промышленности.</p>
            <CategorySwitcher categories={categories} onCategoryChange={handleCategoryChange} />
            <div className={styles.productsGrid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <Image src={imageSrc} alt={product.name} className={styles.productImage} />
                        <h3 className={styles.productName}>{product.name}</h3>
                        <p className={styles.productDescription}>{product.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductsSection;
