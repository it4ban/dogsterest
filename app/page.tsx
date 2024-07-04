'use client';

import styles from './page.module.scss';

import { useFetchData } from '@/hooks/useFetchData';

import CardList from '@/components/CartList';

export default function Home() {
	const { data: dogs, loading, error } = useFetchData();

	return (
		<>
			<main className={styles.mainContainer}>
				<div className={styles.cardContainer}>
					{error ? (
						<div>Error: {error.message}</div>
					) : (
						<CartList dogs={dogs} loading={loading} />
					)}
				</div>
			</main>
		</>
	);
}
