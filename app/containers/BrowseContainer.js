import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions'
import Header from '../components/Header';
import BrowseList from '../components/BrowseList';

class BrowseContainer extends React.Component {
    constructor(props) {
        super(props);
        this.items = [];
    }

    componentDidMount() {
        loadData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.items = nextProps.items;
    }

    render() {
        return (
            <div>
                <Header title='Browse List' />
                <BrowseList items={this.items} />
            </div>
        );
    }
}

const loadData = (props) => {
    props.actions.getProducts();
};

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.app.products.items,
        totalItems: state.app.products.totalItems
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);