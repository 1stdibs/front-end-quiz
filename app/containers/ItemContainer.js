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
            this.item &&
            <div>
                <Header title={this.item.seller.company} match={this.props.match} />
                <Item
                    id={this.item.id}
                    title={this.item.title}
                    image={this.item.image}
                    price={this.item.price}
                    measurements={this.item.measurements}
                    description={this.item.description}
                    creators={this.item.creators}
                    isLiked={this.item.isLiked}
                    onClick={this.props.actions.toggleLikeProduct}
                />
            </div>
        );
    }
};

const loadData = (props) => {
    props.actions.getProduct(props.match.params.id);
};

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.app.product[ownProps.match.params.id]
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);