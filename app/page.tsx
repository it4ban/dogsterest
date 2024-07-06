'use client';

import { useFetch } from '@/hooks/useFetch';

import CardList from '@/components/CartList';

export default function Home() {
	const { data: dogs, loading, error } = useFetch();

	return (
		<>
			{error && <div>Error: {error.message}</div>}
			<CardList dogs={dogs} loading={loading} />
		</>
	);
}
