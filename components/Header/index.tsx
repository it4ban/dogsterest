import React from 'react';
import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<ul className={styles.navContainer}>
				<a href="/">Главная</a>
				<a href="/favourites">Понравившиеся</a>
			</ul>
		</header>
	);
};

export default Header;
