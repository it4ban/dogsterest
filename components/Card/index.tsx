import React from 'react';
import styles from './card.module.scss';

import Image from 'next/image';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

import { useDispatch } from 'react-redux';

import { IDogCard } from './card.interface';

import { likeDogs, unlikeDogs } from '@/lib/features/favouriteThunks';
import { AppDispatch } from '@/lib/store';

const Card: React.FC<{ item: IDogCard }> = ({ item }) => {
	const dispatch: AppDispatch = useDispatch();

	const handleLikeClick = async () => {
		if (item.onFavourite) {
			dispatch(unlikeDogs(item));
		} else {
			dispatch(likeDogs(item));
		}
	};

	return (
		<div className={styles.cardItem}>
			<Image
				className={styles.cardImage}
				src={item.image}
				priority
				alt={`dog ${item.id}`}
				style={{ objectFit: 'cover' }}
				width={300}
				height={300}
			/>
			<div className={styles.cardInfo}>
				<h1>{item.name}</h1>
				<p>{item.description}</p>
			</div>
			<div className={styles.cardLike}>
				<span>{item.likeCount}</span>
				<div className={styles.cardIcon}>
					<MdOutlineFavoriteBorder
						size={24}
						color="#555"
						onClick={handleLikeClick}
					/>
				</div>
			</div>
		</div>
	);
};

export default Card;
