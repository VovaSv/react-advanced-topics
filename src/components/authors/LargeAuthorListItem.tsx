import React from 'react';

export interface IListItem {
	[key: string]: any;
}

export const LargeAuthorListItem: React.FC<IListItem> = ({ author }) => {
	const { name, age, country, books } = author;

	return (
		<p>
			<h2>{name}</h2>
			<p>Age: {age}</p>
			<p>Country: {country}</p>
			<h2>Books</h2>
			<ul>
				{books.map((book: any) => (
					<li key={book}> {book}</li>
				))}
			</ul>
		</p>
	);
};
