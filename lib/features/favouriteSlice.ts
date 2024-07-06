import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IDogCard } from '@/components/Card/card.interface';

import { likeDogs, unlikeDogs } from './favouriteThunks';

const initialState: { dogs: IDogCard[]; favourites: IDogCard[] } = {
	dogs: [],
	favourites: [],
};

export const favouriteSlice = createSlice({
	name: 'favourite',
	initialState: initialState,
	reducers: {
		setDogs: (state, action: PayloadAction<IDogCard[]>) => {
			state.dogs = action.payload;
			state.favourites = state.dogs.filter((dog) => dog.onFavourite);
		},
		// removeFavouriteDogs: (state, action: PayloadAction<IDogCard[]>) => {
		// 	state.dogs = action.payload;
		// 	state.favourites = state.dogs.filter((dog) => !dog.onFavourite);
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(likeDogs.fulfilled, (state, action: PayloadAction<IDogCard>) => {
				const dogIndex = state.dogs.findIndex(
					(dog) => dog.id === action.payload.id,
				);
				if (dogIndex !== -1) {
					state.dogs[dogIndex] = action.payload;
				}

				const favIndex = state.favourites.findIndex(
					(dog) => dog.id === action.payload.id,
				);
				if (favIndex === -1) {
					state.favourites.push(action.payload);
				} else {
					state.favourites[favIndex] = action.payload;
				}
			})
			.addCase(unlikeDogs.fulfilled, (state, action) => {
				const dogIndex = state.dogs.findIndex(
					(dog) => dog.id === action.payload.id,
				);
				if (dogIndex !== -1) {
					state.dogs[dogIndex] = action.payload;
				}

				state.favourites = state.favourites.filter(
					(dog) => dog.id === action.payload.id,
				);
			});
	},
});

export const { setDogs } = favouriteSlice.actions;
