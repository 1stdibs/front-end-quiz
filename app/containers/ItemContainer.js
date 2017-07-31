import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions'
import Header from '../components/Header';
import Item from '../components/Item';

class ItemContainer extends React.Component {
    constructor(props) {        
        super(props);
        this.item = null;
    }

    componentDidMount() {
        loadData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.doMatchParamsDiffer(this.props, nextProps)) {
            loadData(nextProps);
        }
        this.item = nextProps.item;
    }

    doMatchParamsDiffer(props, nextProps) {
        return props.match.params.id !== nextProps.match.params.id;
    }

    render() {

        return (
            <div>
                <Header title='Demo title of product' />
                <Item id={this.item.id} />
            </div>
        );
    }
};

const loadData = (props) => {
    props.actions.getProduct(props.match.params.id);
};

const mapStateToProps = (state, ownProps) => state.app.product[ownProps.match.params.id];

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);