import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ItemList from './ItemList';
import Item from './Item';
import { fetchFavorites } from './../actions/favorites';

class App extends Component {
	// ComponentDidMount
	componentDidMount() {
		// An event handler called post-component mount
		// Request favorite data
		this.props.fetchFavorites(this.props.userId);
	};

	// Render
	render() {
		// Display
		return (
			<div className = "app">
				<div className = "container-fluid">
					{this.props.selectedItem ? 
						(<Item id = {this.props.selectedItem} />) :
						(<ItemList/>)
					}
				</div>
			</div>
		);
	}
}

/* Private methods */
// This maps the state to the props passed to this component
const mapStateToProps = (state) => {
	return {
		selectedItem: state.selectedItem.id,
		userId: state.userId
	};
};

// Ok, so this matches the method in actions to a method available here
const mapDispatchToProps = dispatch => {
	return {
		fetchFavorites: (pUserId) => dispatch(fetchFavorites(pUserId))
	};
};

// So, this, in matches the state, dispatch to props passed to itemlist
export default connect(mapStateToProps, mapDispatchToProps)(App);