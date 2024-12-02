'use client';
import React, { useState } from 'react';
import Logo from '../shared/assets/icon/logo.svg';
import MenuIcon from '../shared/assets/icon/menu.svg';
import styles from './header.module.css';
import ScrollStrip from '../shared/ui/scroll-strip';
import Button from '../shared/ui/button';

const Header = () => {
    const [primary, setPrimary] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tabs = [
        { name: 'Главная', id: 'home' },
        { name: 'О компании', id: 'about' },
        { name: 'Продукция', id: 'products' },
        { name: 'Контакты', id: 'contacts' },
        { name: 'Партнеры', id: 'partners' },
    ];

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Закрываем меню после перехода
    };

    return (
        <section id="home" className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logoBlock}>
                    <Logo onClick={() => setPrimary(prev => !prev)} className={styles.logo} />
                    <span className={styles.phoneNumber}>+7 (999) 999 99-99</span>
                    <MenuIcon onClick={() => setIsMenuOpen(prev => !prev)} className={styles.logoMenu} />
                </div>
                <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    {tabs.map(tab => (
                        <span key={tab.id} onClick={() => handleScroll(tab.id)}>
                            {tab.name}
                        </span>
                    ))}
                </div>
                <div className={styles.contact}>
                    <span>+7 (499) 400-50-01</span>
                </div>
            </div>
            <div className={styles.heroText}>
                <h1>Производим крепеж классов прочности 4,8; 5,8; 8,8, различные виды покрытий, нитроцементация.</h1>
                <div className={styles.headlineSection}>
                    <span>Нужно придумать еще текст, чтобы заполнить пространство.</span>
                </div>
            </div>
            <Button onClick={() => handleScroll('products')}>Каталог</Button>
            <ScrollStrip />
            <ScrollStrip direction='right' />
        </section>
    );
};

export default Header;
