import React from 'react';
import styles from './page.module.scss';

import { IDogCard } from './page.interface';

import { useFetchData } from '@/hooks/useFetchData';

import CardList from '@/components/CartList';

export default async function Home() {
	const dogs: IDogCard[] = await useFetchData();

	return (
		<>
			<main className={styles.mainContainer}>
				<div className={styles.cardContainer}>
					<CardList dogs={dogs} />
				</div>
			</main>
		</>
	);
}
