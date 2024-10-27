import React from 'react';
import { IListItem } from '../authors/LargeAuthorListItem';

export const RegularList = ({
	items,
	sourceName,
	ItemComponent,
}: {
	items: any;
	sourceName: any;
	ItemComponent: React.ComponentType<IListItem>;
}) => {
	return (
		<>
			{items.map((item: any, i: number) => (
				<ItemComponent key={i} {...{ [sourceName]: item }} />
			))}
		</>
	);
};
