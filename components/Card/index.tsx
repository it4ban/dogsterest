import React from 'react';
import styles from './card.module.scss';

import Image from 'next/image';
import { FcLike } from 'react-icons/fc';
import { ICard } from '@/app/page.interface';

const Card: React.FC<{ item: ICard }> = ({ item }) => {
	return (
		<div className={styles.cardItem}>
			<Image
				className={styles.cardImage}
				src={item.image}
				alt={`dog ${item.id}`}
				width={300}
				height={300}
				layout="responsive"
			/>
			<div className={styles.cardInfo}>
				<h1>{item.name}</h1>
				<p>{item.description}</p>
			</div>
			<div className={styles.cardLike}>
				<span>{item.likeCount}</span>
				<div className={styles.cardIcon}>
					<FcLike size={24} />
				</div>
			</div>
		</div>
	);
};

export default Card;
