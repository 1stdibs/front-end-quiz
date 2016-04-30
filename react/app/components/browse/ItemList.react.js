import React from 'react';
import Item from './Item.react';

const ItemList = React.createClass({

	propTypes: {
		items: React.PropTypes.array
	},

	getDefaultProps() {
		return {
			items: [{
				"id": "f_3906702",
				"integerId": "3906702",
				"title": "Stunning Arturo Pani, Solid Brass Sculptural Coffee Table, Mexico City, 1950",
				"vertical": "furniture",
				"nth": 0,
				"image": "https:\/\/a.1stdibscdn.com\/archivesE\/upload\/1121189\/f_3906702\/3906702_s.jpg",
				"uri": "\/furniture\/tables\/coffee-tables-cocktail-tables\/stunning-arturo-pani-solid-brass-sculptural-coffee-table-mexico-city-1950\/id-f_3906702\/",
				"sold": false,
				"on_hold": false,
				"price": {
					"amounts": {
						"GBP": "\u00a38,185",
						"USD": "$12,000",
						"EUR": "\u20ac10.755"
					},
					"initial_amounts": null
				},
				"shipping": null,
				"seller": {
					"company": "House of Blu",
					"logo": "\/dealer_images\/9717\/f_9717_search.png",
					"uri": "\/dealers\/house-of-blu\/",
					"id": "f_9717"
				},
				"measurements": {
					"size": null,
					"diameter": "4 ft. 3 in.",
					"width": null,
					"height": "11 in.",
					"length": null,
					"depth": null,
					"display": "H 11 in. Dm 4 ft. 3 in."
				},
				"creators": "Arturo Pani",
				"attributes": "Vintage 1950s Mexican Mid-Century Modern Coffee and Cocktail Tables",
				"materials": "",
				"description": "Stunning and rare solid brass or bronze, sculptural coffee table, by Arturo Pani, Mexico City, circa 1950."
			}]
		};
	},

	render() {
		const items = this.props.items.map((item, index) => 
			<li key={index}>
				<Item
					imageURI={item.image}
					price={item.price && item.price.amounts && item.price.amounts.USD}
					description={item.title}
					key={index}
				/>
			</li>
		);

		return (
			<ul>
				{items}
			</ul>
		);
	}

});

module.exports = ItemList;