import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as ACTIONS from 'app/actions/appActions';

import config from 'app/config';

import Header from 'app/components/Common/Header.jsx';
import ListItems from 'app/components/ListPage/ListItems.jsx';
import LoadMore from 'app/components/ListPage/LoadMore.jsx';
import Loading from 'app/components/Common/Loading.jsx';

class ListPageContainer extends React.Component {
    componentDidMount() {
        let startPage = this.props.match.params.page;
        if(startPage == null)
            startPage = 1;
        else {
            startPage = startPage * 1;
        }
        this.props.actions.getItems(0, startPage);
    }

    render() {
        const {selectedCurrency, actions, listPageLoading, productList, updateFavorite, favorites,
            listPageIndex, history, totalItems, loadMoreLoading, match} = this.props;

        return (
            <div>
                <Header headerText="Browse Page" selectedCurrency={selectedCurrency} actions={actions} />
                {listPageLoading ? <Loading width={100} cName="list-loading" /> : null}
                {productList.length > 0 ? <ListItems page={match.params.page} items={productList} favoriteAction={actions.updateFavorite}
                    selectedCurrency={selectedCurrency} history={history} favorites={favorites} /> : null}
                {productList.length > 0 && productList.length < totalItems && !loadMoreLoading ?
                    <LoadMore history={history} pageIndex={listPageIndex} actions={actions} /> : null}
                {loadMoreLoading ? <Loading width={40} cName="load-more-loading" /> : null}
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
        listPageLoading : state.listPageLoading,
        loadMoreLoading : state.loadMoreLoading,
        listPageIndex : state.listPageIndex,
        totalItems : state.totalItems,
        productList : state.productList,
        favorites : state.favorites,
        selectedCurrency : state.selectedCurrency
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPageContainer);
