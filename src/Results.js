import React from 'react';
import { Item } from './Item';

export class Results extends React.Component {
	render() {
		const bookList = [];
		let searchResults = this.props.searchResults && this.props.searchResults[0];

		console.log('inside Results SEARCH RESULTS = ', searchResults);

		if (searchResults) {
			console.log('in results - searchResults items');

			const bookList = searchResults.items.map((book, index) => {
				// console.log(book.volumeInfo.title);
				return <Item key={index} book={book} />;
			});
			console.log('bookList length = ', bookList.length);
			console.log('bookList = ', bookList);
		}

		return (
			<section id="results">
				<h2>Search Results</h2>
				<ul>{bookList}</ul>
			</section>
		);
	}
}

/*
{bookList.length > 0 ? (
				<h2>Search Results</h2>
					<ul id="results-list" className="item-list">
						{bookList}
					</ul>
				) : (
					<h2>Search Results</h2>
					'No books to display!'
				)}
			*/
