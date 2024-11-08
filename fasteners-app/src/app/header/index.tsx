'use client';
import React, { useState } from 'react';
import Logo from '../shared/assets/icon/logo.svg';
import Menu from '../shared/assets/icon/menu.svg';
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
    };

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logoBlock}>
                    <Logo onClick={() => setPrimary(prev => !prev)} className={styles.logo} />
                    <span>+7 (999) 999 99-99</span>
                    <Menu onClick={() => setIsMenuOpen(prev => !prev)} className={styles.logoMenu} />
                </div>
                <div className={styles.menu}>
                    {tabs.map(tab => (
                        <span key={tab.id} onClick={() => handleScroll(tab.id)}>
                            {tab.name}
                        </span>
                    ))}
                </div>
                <div className={styles.contact}><span>+7 (499) 400-50-01</span></div>
            </div>
            <div className={styles.heroText}>
                <h1>Производим качественный крепеж под маркой Фастенерс с 2004 года.</h1>
                <div className={styles.headlineSection}>
                    <span>Нужно придумать еще текст, чтобы заполнить пространство.</span>
                </div>
            </div>
            <Button onClick={() => handleScroll('products')}>Каталог</Button>
            <ScrollStrip />
        </div>
    );
};

export default Header;
