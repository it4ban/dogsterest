import React from 'react';

import dynamic from 'next/dynamic';

import { IDogCard } from './Card/card.interface';

const SkeletonCard = dynamic(() => import('./Card/SkeletonCard'), {
	ssr: false,
});

const Card = dynamic(() => import('./Card'), {
	loading: () => <SkeletonCard />,
	ssr: false,
});

const CartList: React.FC<{ dogs: IDogCard[]; loading: boolean }> = ({
	dogs,
	loading,
}) => {
	return (
		<>
			{loading
				? [...Array(10)].map((_, index) => <SkeletonCard key={index} />)
				: dogs.map((item: IDogCard) => <Card key={item.id} item={item} />)}
		</>
	);
};

export default CartList;
