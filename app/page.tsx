'use client';

import styles from './page.module.scss';

import { useFetch } from '@/hooks/useFetch';

import CardList from '@/components/CartList';

export default function Home() {
	const { data: dogs, loading, error } = useFetch();

	return (
		<>
			<main className={styles.mainContainer}>
				{error && <div>Error: {error.message}</div>}
				<div className={styles.cardContainer}>
					<CardList dogs={dogs} loading={loading} />
				</div>
			</main>
		</>
	);
}
