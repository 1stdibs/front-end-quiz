import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions'
import Header from '../components/Header';

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.item = {};
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.app.product
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);