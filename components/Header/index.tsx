import React from 'react';
import styles from './header.module.scss';

import Link from 'next/link';

const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<ul className={styles.navContainer}>
				<Link href="/">Главная</Link>
				<Link href="/favourites">Понравившиеся</Link>
			</ul>
		</header>
	);
};

export default Header;
