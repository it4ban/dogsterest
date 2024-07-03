import React from 'react';
import styles from './card.module.scss';

import Image from 'next/image';
import { FcLike } from 'react-icons/fc';

const Card = ({ item }: any) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.likeContainer}>
				<span>{item.likeCount}</span>
				<div className={styles.iconWrapper}>
					<FcLike size={32} />
				</div>
			</div>
			<Image
				className={styles.cardImage}
				src={item.image}
				alt={`dog ${item.id}`}
				width={120}
				height={120}
			/>
			<div className={styles.cardInfo}>
				<h1>{item.name}</h1>
				<p>{item.description}</p>
			</div>
		</div>
	);
};

export default Card;
