'use client';
import React, { useState } from 'react';
import Logo from '../shared/assets/icon/logo.svg';
import Letter from '../shared/assets/icon/markunread.svg';
import Call from '../shared/assets/icon/call.svg';
import MenuIcon from '../shared/assets/icon/menu.svg';
import styles from './header.module.css';
import ScrollStrip from '../shared/ui/scroll-strip';
import Button from '../shared/ui/button';

const Header = () => {
    const [isCopy, setIsCopy] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tabs = [
        { name: 'Главная', id: 'home' },
        { name: 'О компании', id: 'about' },
        { name: 'Продукция', id: 'products' },
        { name: 'Контакты', id: 'contacts' },
        { name: 'Партнеры', id: 'partners' },
    ];

    const copyText = "sale.fasteners@mail.ru"
    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Закрываем меню после перехода
    };

    const handleCopy = async (e: React.MouseEvent<HTMLSpanElement>) => {
        try {
            await navigator.clipboard.writeText(e.currentTarget.innerText);
            setIsCopy(true)
            setTimeout(() => setIsCopy(false), 2000);
        } catch (error) {
            console.error('Failed to copy text:', error);
        }
    }

    return (
        <section id="home" className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logoBlock}>
                    <Logo className={styles.logo} />
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
                    <div className={styles.contactGroup}>
                        <Letter />
                        <span onClick={handleCopy} className={isCopy ? styles.copiedText : ''}>{isCopy ? 'Скопировано' : copyText}</span>
                    </div>
                    <div className={styles.contactGroup}>

                        <Call className={styles.contactIcon} />
                        <span>+7 (499) 400-50-01</span>
                    </div>
                </div>
            </div>
            <div className={styles.heroText}>
                <h1>Производим крепеж классов прочности 4,8; 5,8; 8,8, различные виды покрытий, нитроцементация.</h1>
                <div className={styles.headlineSection}>
                    <span>Изготовим крепежные изделия по вашим чертежам или примерам.
                        Обеспечим необходимые характеристики.
                        Применяем различные типы химической <p>и механической обработки.</p> </span>
                </div>
            </div>
            <Button onClick={() => handleScroll('products')}>Каталог</Button>
            <ScrollStrip />
            <ScrollStrip direction='right' />
        </section>
    );
};

export default Header;
