import { useState, useEffect } from 'react';

import { IDogCard } from '@/components/Card/card.interface';

export const useFetch = (url: string = 'http://localhost:3001/doggos') => {
	const [data, setData] = useState<IDogCard[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setData(data);
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		})();
	}, [url]);

	return { data, loading, error };
};
