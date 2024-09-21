'use client'
import React, { useState } from 'react'
import Logo from '../shared/assets/icon/logo.svg';
import styles from './header.module.css'
const Header = () => {
    const [primary, setPrimary] = useState(true);
    return (
        <div
            className={styles.container}
            style={{
                backgroundImage: `url(/images/${primary ? 'header.png' : 'header1.png'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '700px'
            }}

        >
            <div className={styles.navbar}><Logo onClick={() => { setPrimary(prev => !prev) }} className={styles.logo} />
                <div className={styles.menu}>
                    <span >О КОМПАНИИ</span>
                    <span >ПРОИЗВОДСТВО</span>
                    <span >КАТАЛОГ</span>
                    <span >ПАРТНЕРЫ</span>
                    <span >НОВОСТИ</span>
                    <span >КОНТАКТЫ</span>
                </div>
            </div></div>
    )
}

export default Header