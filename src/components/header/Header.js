import styles from './Header.module.css';

import HeaderLogo from "./HeaderLogo";

function Header() {
    return (
        <header className={styles.mainHeader}>
            <HeaderLogo/>
        </header>
    );
}

export default Header;