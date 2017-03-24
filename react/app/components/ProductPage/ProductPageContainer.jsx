import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as ACTIONS from 'app/actions/appActions';

import Header from 'app/components/Common/Header.jsx';
import Hero from 'app/components/ProductPage/Hero.jsx';
import ProductInfo from 'app/components/ProductPage/ProductInfo.jsx';
import ProductDescription from 'app/components/ProductPage/ProductDescription.jsx';
import Loading from 'app/components/Common/Loading.jsx';

class ProductPageContainer extends React.Component {
    componentDidMount() {
        let itemId = this.props.match.params.itemId;
        this.props.actions.getItem(itemId);
    }

    render() {
        const {actions, selectedCurrency, item, favorites, productPageLoading} = this.props;
        return (
            <div>
                <Header headerText={item != null ? item.seller.company : ''} selectedCurrency={selectedCurrency} actions={actions} />
                {productPageLoading ? <Loading width={100} cName="list-loading" /> : null}
                {item != null ? (
                    <div className="container">
                        <Hero item={item} favorites={favorites} favoriteAction={actions.updateFavorite} />
                        <section id="pdpDetails">
                            <ProductInfo item={item} selectedCurrency={selectedCurrency} />
                            <ProductDescription item={item} />
                        </section>
                    </div>
                ) : 'PRODUCT NOT FOUND'}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(ACTIONS, dispatch)
    }
}

const mapStateToProps = state => {
    return {
        productPageLoading : state.productPageLoading,
        favorites : state.favorites,
        item : state.product,
        selectedCurrency : state.selectedCurrency
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContainer);
