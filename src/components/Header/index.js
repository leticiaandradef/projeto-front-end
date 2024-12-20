'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.logo}>

                {<Image className={styles.img} src='/image/sanrio.png' alt="Imagem Logo sanrio" width={100} height={50}/>}
            </div>

            <div 
            className={styles.menuIcon} 
              onClick={menuOpen ? closeMenu : openMenu}>
                  {menuOpen ? '✖' : '☰'}
            </div>

            <ul className={`${styles.lista} ${menuOpen ? styles.open : ''}`}>
                <li>
                    <Link href="/">Início</Link>
                </li>
                <li>
                    <Link href="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link href="/personagens">Personagens</Link>
                </li>
                <li>
                    <Link href="/listas">Lista</Link>
                </li>
                <li>
                    <Link href="/props">Props</Link>
                </li>
                <li>
                    <Link href="/filtro">Filtro</Link>
                </li>
                <li>
                    <Link href="/efeitos">Efeitos</Link>
                </li>
            </ul>
        </header>
    );
}