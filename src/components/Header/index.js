'use client'
import {useState} from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className={styles.header}>

            <div className={styles.logo}>Sanrio</div>

            <div 
                className={styles.menuIcon} 
                onClick={toggleMenu}>
                ☰
            </div>

            <ul className={`${styles.lista} ${menuOpen ? styles.open : ""}`}>
                <li>
                    <Link href="/">Início</Link>
                </li>
                <li>
                    <Link href="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link href="/personagens">Personagens</Link>
                </li>
            </ul>
        </header>
    );
}