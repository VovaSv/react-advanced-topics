import React from 'react';
import { IListItem } from './LargeAuthorListItem';

export const SmallAuthorListItem: React.FC<IListItem> = ({ author }) => {
	const { name, age } = author;

	return (
		<p>
			{' '}
			Name: {name}, Age: {age}
		</p>
	);
};
