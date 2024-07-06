import { configureStore } from '@reduxjs/toolkit';
import { favouriteSlice } from './features/favouriteSlice';

export const store = configureStore({
	reducer: {
		dogs: favouriteSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
