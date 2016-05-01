import React from 'react';
import Favourite from '../widgets/Favourite.react';

import styles from './Item.css';

const Item = React.createClass({

	propTypes: {
		item: React.PropTypes.object.isRequired
	},

	render() {
		const item = this.props.item;
		return (
			<article className={styles.container}>
				<div className={styles.imageContainer}>
					<Favourite id={this.props.item.id} className={styles.favouriteButton}/>
					<img src={item.image} alt={item.title} className={styles.img}/>
				</div>
				<section className={styles.section}>
					<h2 className={styles.title}>{item.title}</h2>
					<span>{item.price && item.price.amounts && item.price.amounts.USD || 'Price Upon Request'}</span>
					<h3 className={styles.measurementsHeading}>Measurements:</h3>
					<span className={styles.measurements}>{item.measurements && item.measurements.display}</span>
					<button type='button' className={styles.button}>Purchase</button>
					<button type='button' className={styles.button}>Make offer</button>
				</section>
				<section className={styles.section}>
					<p className={styles.p}>{item.description}</p>
					<span><em className={styles.em}>Creator:</em> {item.creators}</span>
				</section>
			</article>
		);
	}

});

module.exports = Item;