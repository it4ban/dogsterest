import { useState, useEffect } from 'react';

import { IDogCard } from '@/components/Card/card.interface';
import axios, { AxiosError } from 'axios';

export const useFetch = (url: string = 'http://localhost:3001/doggos') => {
	const [data, setData] = useState<IDogCard[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(url);
				setData(response.data);
			} catch (err) {
				const axiosError = err as AxiosError;

				if (!axiosError.response) {
					setError(new Error('Network error'));
				} else {
					setError(
						new Error(`HTTP error! message: ${axiosError.response?.status}`),
					);
				}
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return { data, loading, error };
};
