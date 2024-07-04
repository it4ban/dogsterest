import { IDogCard } from '@/app/page.interface';
import React from 'react';

import Card from '@/components/Card';

const CartList: React.FC<{ dogs: IDogCard[] }> = ({ dogs }) => {
	return (
		<>
			{dogs.map((item: IDogCard) => (
				<Card key={item.id} item={item} />
			))}
		</>
	);
};

export default CartList;
