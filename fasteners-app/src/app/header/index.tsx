'use client'
import React, { useState } from 'react'
import Logo from '../shared/assets/icon/logo.svg';
import Menu from '../shared/assets/icon/menu.svg';
import styles from './header.module.css'
const Header = () => {
    const [primary, setPrimary] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tabs = ['О КОМПАНИИ', 'ПРОИЗВОДСТВО', 'КАТАЛОГ', 'ПАРТНЕРЫ', 'НОВОСТИ', 'КОНТАКТЫ',]
    return (
        <div
            className={` ${isMenuOpen ? styles.containerOpen : styles.container}`}
            style={{
                backgroundImage: `url(/images/${primary ? 'header.png' : 'header1.png'})`,
                backgroundSize: 'cover'
            }}

        >
            <div className={styles.navbar}>
                <div className={styles.logoBlock}>
                    <Logo onClick={() => { setPrimary(prev => !prev) }} className={styles.logo} />
                    <span>+7 (999) 999 99-99</span>
                    <Menu onClick={() => {
                        setIsMenuOpen(prev => !prev);
                    }}
                        className={styles.logoMenu} />
                </div>
                <div className={styles.menu}>
                    {tabs.map(el => (<span key={el}>{el}</span>))}
                </div>
            </div></div>
    )
}

export default Header