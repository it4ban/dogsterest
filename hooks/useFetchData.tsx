export async function useFetchData(
	url: string = 'http://localhost:3001/doggos',
	shouldError: boolean = false,
) {
	const response = await fetch(url);

	if (!response.ok || shouldError) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return response.json();
}
