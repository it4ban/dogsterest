import React from 'react';
import styles from './card.module.scss';

import ContentLoader from 'react-content-loader';

const SkeletonCard: React.FC = () => {
	return (
		<div className={styles.cardItem}>
			<ContentLoader
				speed={2}
				width={300}
				height={300}
				viewBox="0 0 300 300"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
				className={styles.cardImage}>
				<rect x="0" y="0" rx="0.5rem" ry="0.5rem" width="300" height="300" />
			</ContentLoader>
			<div className={styles.cardInfo}>
				<ContentLoader
					speed={2}
					width={300}
					height={24}
					viewBox="0 0 300 24"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb">
					<rect x="0" y="0" rx="4" ry="4" width="60%" height="24" />
				</ContentLoader>
				<ContentLoader
					speed={2}
					width={300}
					height={18}
					viewBox="0 0 300 18"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb">
					<rect x="0" y="0" rx="4" ry="4" width="80%" height="18" />
				</ContentLoader>
			</div>
			<div className={styles.cardLike}>
				<ContentLoader
					speed={2}
					width={24}
					height={24}
					viewBox="0 0 24 24"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb">
					<rect x="0" y="0" rx="50%" ry="50%" width="24" height="24" />
				</ContentLoader>
			</div>
		</div>
	);
};

export default SkeletonCard;
