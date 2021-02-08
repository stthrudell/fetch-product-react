import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../App.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.header}>
                <NavLink exact to="/" className={styles.headerButton}>Produtos</NavLink>
                <NavLink to="/contato" className={styles.headerButton}>Contato</NavLink>
            </nav>
        </div>
    )
}

export default Header
