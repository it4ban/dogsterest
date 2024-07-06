import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IDogCard } from '@/components/Card/card.interface';

export const likeDogs = createAsyncThunk(
	'dogs/likeDogs',
	async (dog: IDogCard) => {
		const updatedDog = {
			...dog,
			likeCount: dog.likeCount++,
			onFavourite: true,
		};

		await axios
			.put(`http://localhost:3001/doggos?id=${dog.id}`, updatedDog, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.catch((err) => {
				throw new Error('Failed to like card: ' + err.message);
			});

		return await updatedDog;
	},
);

export const unlikeDogs = createAsyncThunk(
	'dogs/unlikeDogs',
	async (dog: IDogCard) => {
		const updatedDog = {
			...dog,
			likeCount: Math.max(dog.likeCount--, 0),
			onFavourite: false,
		};

		await axios
			.put(`http://localhost:3001/doggos?id=${dog.id}`, updatedDog, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.catch((err) => {
				throw new Error('Failed to unlike card: ' + err.message);
			});

		return await updatedDog;
	},
);
