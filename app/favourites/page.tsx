'use client';

import React from 'react';

import CardList from '@/components/CartList';

import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const Favourites = () => {
	const favourites = useSelector((state: RootState) => state.dogs.favourites);

	return (
		<>
			<CardList dogs={favourites} loading={false} />
		</>
	);
};

export default Favourites;
