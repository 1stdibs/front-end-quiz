/* Imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from './../actions/items';
import ListItem from './ListItem';
import './ItemList.css';

/* Component */
class ItemList extends Component {
	// ComponentDidMount
	componentDidMount() {
		// An event handler called post-component mount
		// Request item data, but only if no items are available
		if (this.props.items.length === 0) {
			// Otherwise, we just use the existing data
			this.props.fetchData(this.props.currentPage);
		}
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
		if (this.props.requestInFlight || this.props.items.length === 0) {
			// Only display the loading indicator on initial load
			return (
				<div className = "text-center">Awaiting data from the server...</div>
			);
		}

		// Render list
		return (
			<div className = "itemList container">
				<div className = "row">
					{this.props.items.map((x) => <ListItem key = {x.integerId} item = {x}/>)}
				</div>

				{this.props.canRequestItems &&
					<div className = "row">
						<div className = "col-lg-12 text-center">
							<button className = "btn btn-lg btn-primary"
								onClick = {() => this.props.fetchData(this.props.currentPage)}>
									Load more
							</button>
						</div>
					</div>
				}
			</div>
		)
	};
}

/* Private methods */
// This maps the state to the props passed to this component
const mapStateToProps = (state) => {
	return {
		items: state.items.items,
		requestInFlight: state.itemsRequestInFlight,
		requestFailed: state.itemsRequestFailed,
		currentPage: state.items.currentPage,
		canRequestItems: state.items.canRequestAdditionalItems
	};
};

// Ok, so this matches the method in actions to a method available here
const mapDispatchToProps = dispatch => {
	return {
		fetchData: (pCurrentPage) => dispatch(fetchItems(pCurrentPage))
	};
};


// So, this, in matches the state, dispatch to props passed to itemlist
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
