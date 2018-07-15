/* Imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItem, deselectItem } from './../actions/item';
import FavoriteButton from './FavoriteButton';
import './Item.css';

/* Component */
class Item extends Component {
	// ComponentDidMount
	componentDidMount() {
		// An event handler called post-component mount
		this.props.fetchData(this.props.id);
	};

	// Render
	render() {
		// Has the request failed?
		if (this.props.requestFailed) {
			return (
				<div className = "text-center">An error was encountered while fetching the request</div>
			);
		}
		
		// Is the request in flight?
		if (this.props.requestInFlight || !this.props.item) {
			// Only display the loading indicator on initial load
			return (
				<div className = "text-center">Awaiting data from the server...</div>
			);
		}

		// Render
		return (
			<div className = "item">
				<div className = "itemHeader row">
					<div className = "col text-center">
						<h1>{this.props.item.seller.company}</h1>
					</div>

					<button className = "backButton"
						onClick = {() => this.props.deselectItem()}>
							&lt; Home
					</button>
				</div>

				<div className = "itemBody row row-eq-height">
					<div className = "card image col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
						<img className = "card-img-top"
							src = {this.props.item.image}
							alt = {this.props.item.title} />

						<FavoriteButton id = { this.props.item.id }/>
					</div>



					<div className = "contentContainer col-12 col-sm-12 col-md-6 col-lg-8 col-xl-10">
						<div className = "row row-eq-height" >
							<div className = "col-12">
								<div className = "card price">
									<h1>{this.props.item.title}</h1>
									<h4>{this.props.item.price ? this.props.item.price.amounts.EUR : 'Price Upon Request'}</h4>
									<p>
										<b>Measurements:</b><br/>
										<span>{this.props.item.measurements.display}</span>
									</p>
								</div>
							</div>

							<div className = "col-12">
								<div className = "card buttons">
									<button className = "btn">
										PURCHASE
									</button>

									<button className = "btn">
										MAKE OFFER
									</button>
								</div>
							</div>

							<div className = "col-12">
								<div className = "card description">
									<p>{this.props.item.description}</p>
									<p><b>Creator:</b> {this.props.item.creators}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	};
}

/* Private methods */
// This maps the state to the props passed to this component
const mapStateToProps = (state) => {
	return {
		item: state.selectedItem.item,
		requestInFlight: state.itemRequestInFlight,
		requestFailed: state.itemRequestFailed,
	};
};

// Ok, so this matches the method in actions to a method available here
const mapDispatchToProps = dispatch => {
	return {
		fetchData: (pId) => dispatch(fetchItem(pId)),
		deselectItem: () => dispatch(deselectItem())
	};
};


// So, this, in matches the state, dispatch to props passed to itemlist
export default connect(mapStateToProps, mapDispatchToProps)(Item);