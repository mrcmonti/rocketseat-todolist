import styles from './Header.module.css';

import ImgLogo from '../assets/logo.png'

export function Header() {
    return (
        <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={ImgLogo} alt="logo" />
                </div>
        </header>
    )
}