webpackJsonp([0],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_App_jsx__ = __webpack_require__(140);





__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_app_components_App_jsx__["a" /* default */], null), document.getElementById('app'));

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
    currencies: ['USD', 'GBP', 'EUR'],
    getItemsUrl: '/data',
    getItemUrlBase: '/item/',
    getItemurl: '/data',
    itemLimit: 9,
    noPriceMessage: 'Price Upon Request',
    favoriteKey: 'favorite',
    currencyKey: 'currency'
};

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_components_ListPage_ListPageContainer_jsx__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_components_ProductPage_ProductPageContainer_jsx__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_store_configureStore__ = __webpack_require__(154);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_app_store_configureStore__["a" /* default */])();

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */],
                { store: store },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["a" /* BrowserRouter */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Switch */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3_app_components_ListPage_ListPageContainer_jsx__["a" /* default */] }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: '/browse/:page', component: __WEBPACK_IMPORTED_MODULE_3_app_components_ListPage_ListPageContainer_jsx__["a" /* default */] }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: '/item/:itemId', component: __WEBPACK_IMPORTED_MODULE_4_app_components_ProductPage_ProductPageContainer_jsx__["a" /* default */] })
                    )
                )
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_Common_CurrencyItem_jsx__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_config__ = __webpack_require__(13);





var Currency = function Currency(_ref) {
    var selectedCurrency = _ref.selectedCurrency,
        changeCurrencyCallback = _ref.changeCurrencyCallback;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'currencies' },
        'Currency:\xA0',
        __WEBPACK_IMPORTED_MODULE_2_app_config__["a" /* default */].currencies.map(function (value) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_app_components_Common_CurrencyItem_jsx__["a" /* default */], { key: value, currency: value, selectedCurrency: selectedCurrency,
                changeCurrencyCallback: changeCurrencyCallback });
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Currency);

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_functions__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_config__ = __webpack_require__(13);





var CurrencyItem = function CurrencyItem(_ref) {
    var currency = _ref.currency,
        selectedCurrency = _ref.selectedCurrency,
        changeCurrencyCallback = _ref.changeCurrencyCallback;

    var handleChangeCurrency = function handleChangeCurrency() {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_app_functions__["c" /* setLocalStorageItem */])(__WEBPACK_IMPORTED_MODULE_2_app_config__["a" /* default */].currencyKey, currency);
        changeCurrencyCallback(currency);
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: selectedCurrency === currency ? 'selected' : null,
            onClick: handleChangeCurrency },
        currency
    );
};

/* harmony default export */ __webpack_exports__["a"] = (CurrencyItem);

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(112);



var HomeLink = function HomeLink(_ref) {
    var price = _ref.price;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */],
        { to: '/', className: 'home-link vcenter' },
        'Home'
    );
};

/* harmony default export */ __webpack_exports__["a"] = (HomeLink);

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_Common_FavoriteIcon_jsx__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_Common_ItemImage_jsx__ = __webpack_require__(44);





var Measurements = function Measurements(_ref) {
    var item = _ref.item;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'measurements' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'heading' },
            'Measurements:'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            item.measurements.display
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Measurements);

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_Common_Price_jsx__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_components_Common_ItemImage_jsx__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_components_Common_FavoriteIcon_jsx__ = __webpack_require__(43);








var ListItem = function ListItem(_ref) {
    var item = _ref.item,
        selectedCurrency = _ref.selectedCurrency,
        favoriteAction = _ref.favoriteAction,
        isFavorite = _ref.isFavorite,
        history = _ref.history;

    var handleRoute = function handleRoute(event) {
        if (!event.target.classList.contains('heart')) history.push('/item/' + item.id);
    };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'article',
        { className: 'item', onClick: handleRoute },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_app_components_Common_ItemImage_jsx__["a" /* default */], { url: item.image }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_app_components_Common_Price_jsx__["a" /* default */], { price: item.price != null ? item.price.amounts[selectedCurrency] : __WEBPACK_IMPORTED_MODULE_1_app_config__["a" /* default */].noPriceMessage }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_app_components_Common_FavoriteIcon_jsx__["a" /* default */], { favoriteAction: favoriteAction, itemId: item.id, isFavorite: isFavorite })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (ListItem);

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_ListPage_ListItem_jsx__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_config__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ListItems = function (_React$Component) {
    _inherits(ListItems, _React$Component);

    function ListItems() {
        _classCallCheck(this, ListItems);

        return _possibleConstructorReturn(this, (ListItems.__proto__ || Object.getPrototypeOf(ListItems)).apply(this, arguments));
    }

    _createClass(ListItems, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                selectedCurrency = _props.selectedCurrency,
                favoriteAction = _props.favoriteAction,
                favorites = _props.favorites,
                page = _props.page,
                history = _props.history;

            if (page == null) page = 1;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'section',
                { id: 'itemsList', className: 'container' },
                this.props.items.slice(0, page * __WEBPACK_IMPORTED_MODULE_2_app_config__["a" /* default */].itemLimit).map(function (item) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_app_components_ListPage_ListItem_jsx__["a" /* default */], { key: item.id, item: item, selectedCurrency: selectedCurrency, history: history,
                        favoriteAction: favoriteAction, isFavorite: favorites[item.id] != undefined });
                })
            );
        }
    }]);

    return ListItems;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ListItems);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_actions_appActions__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_components_Common_Header_jsx__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_components_ListPage_ListItems_jsx__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_components_ListPage_LoadMore_jsx__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_components_Common_Loading_jsx__ = __webpack_require__(79);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var ListPageContainer = function (_React$Component) {
    _inherits(ListPageContainer, _React$Component);

    function ListPageContainer() {
        _classCallCheck(this, ListPageContainer);

        return _possibleConstructorReturn(this, (ListPageContainer.__proto__ || Object.getPrototypeOf(ListPageContainer)).apply(this, arguments));
    }

    _createClass(ListPageContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var startPage = this.props.match.params.page;
            if (startPage == null) startPage = 1;else {
                startPage = startPage * 1;
            }
            this.props.actions.getItems(0, startPage);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                selectedCurrency = _props.selectedCurrency,
                actions = _props.actions,
                listPageLoading = _props.listPageLoading,
                productList = _props.productList,
                updateFavorite = _props.updateFavorite,
                favorites = _props.favorites,
                listPageIndex = _props.listPageIndex,
                history = _props.history,
                totalItems = _props.totalItems,
                loadMoreLoading = _props.loadMoreLoading,
                match = _props.match;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_app_components_Common_Header_jsx__["a" /* default */], { headerText: 'Browse Page', selectedCurrency: selectedCurrency, actions: actions }),
                listPageLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_app_components_Common_Loading_jsx__["a" /* default */], { width: 100, cName: 'list-loading' }) : null,
                productList.length > 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_app_components_ListPage_ListItems_jsx__["a" /* default */], { page: match.params.page, items: productList, favoriteAction: actions.updateFavorite,
                    selectedCurrency: selectedCurrency, history: history, favorites: favorites }) : null,
                productList.length > 0 && productList.length < totalItems && !loadMoreLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_app_components_ListPage_LoadMore_jsx__["a" /* default */], { history: history, pageIndex: listPageIndex, actions: actions }) : null,
                loadMoreLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_app_components_Common_Loading_jsx__["a" /* default */], { width: 40, cName: 'load-more-loading' }) : null
            );
        }
    }]);

    return ListPageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_3_app_actions_appActions__, dispatch)
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        listPageLoading: state.listPageLoading,
        loadMoreLoading: state.loadMoreLoading,
        listPageIndex: state.listPageIndex,
        totalItems: state.totalItems,
        productList: state.productList,
        favorites: state.favorites,
        selectedCurrency: state.selectedCurrency
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(ListPageContainer));

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var LoadMore = function (_React$Component) {
    _inherits(LoadMore, _React$Component);

    function LoadMore() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LoadMore);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoadMore.__proto__ || Object.getPrototypeOf(LoadMore)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
            var index = _this.props.pageIndex;
            _this.props.history.push('/browse/' + (index + 1));
            _this.props.actions.getItems(index, index + 1);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LoadMore, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { id: 'loadMoreProducts', onClick: this.handleClick },
                'Load More'
            );
        }
    }]);

    return LoadMore;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LoadMore);

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_Common_FavoriteIcon_jsx__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_Common_ItemImage_jsx__ = __webpack_require__(44);





var Hero = function Hero(_ref) {
    var item = _ref.item,
        favorites = _ref.favorites,
        favoriteAction = _ref.favoriteAction;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { id: 'heroImage' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_app_components_Common_ItemImage_jsx__["a" /* default */], { url: item.image, cName: 'vcenter' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_app_components_Common_FavoriteIcon_jsx__["a" /* default */], { favoriteAction: favoriteAction, itemId: item.id, isFavorite: favorites[item.id] != undefined })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Hero);

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var ProductDescription = function ProductDescription(_ref) {
    var item = _ref.item;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { id: "productDescription", className: "detail" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "center" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                item.description
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                { className: "heading" },
                "Creator: "
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                null,
                item.creators
            )
        )
    );
};
/* harmony default export */ __webpack_exports__["a"] = (ProductDescription);

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_Common_Measurements_jsx__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_Common_Price_jsx__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_config__ = __webpack_require__(13);







var ProductInfo = function ProductInfo(_ref) {
    var item = _ref.item,
        selectedCurrency = _ref.selectedCurrency;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'productInfo', className: 'detail' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'center' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'pdp-title' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    null,
                    item.title
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_app_components_Common_Price_jsx__["a" /* default */], { price: item.price != null ? item.price.amounts[selectedCurrency] : __WEBPACK_IMPORTED_MODULE_3_app_config__["a" /* default */].noPriceMessage }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_app_components_Common_Measurements_jsx__["a" /* default */], { item: item })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { id: 'purchase', className: 'pdp-action' },
            'PURCHASE'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { id: 'makeOffer', className: 'pdp-action' },
            'MAKE OFFER'
        )
    );
};
/* harmony default export */ __webpack_exports__["a"] = (ProductInfo);

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_actions_appActions__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_components_Common_Header_jsx__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_components_ProductPage_Hero_jsx__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_components_ProductPage_ProductInfo_jsx__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_components_ProductPage_ProductDescription_jsx__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_components_Common_Loading_jsx__ = __webpack_require__(79);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var ProductPageContainer = function (_React$Component) {
    _inherits(ProductPageContainer, _React$Component);

    function ProductPageContainer() {
        _classCallCheck(this, ProductPageContainer);

        return _possibleConstructorReturn(this, (ProductPageContainer.__proto__ || Object.getPrototypeOf(ProductPageContainer)).apply(this, arguments));
    }

    _createClass(ProductPageContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var itemId = this.props.match.params.itemId;
            this.props.actions.getItem(itemId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                actions = _props.actions,
                selectedCurrency = _props.selectedCurrency,
                item = _props.item,
                favorites = _props.favorites,
                productPageLoading = _props.productPageLoading;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_app_components_Common_Header_jsx__["a" /* default */], { headerText: item != null ? item.seller.company : '', selectedCurrency: selectedCurrency, actions: actions }),
                productPageLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_app_components_Common_Loading_jsx__["a" /* default */], { width: 100, cName: 'list-loading' }) : null,
                item != null ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'container' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_app_components_ProductPage_Hero_jsx__["a" /* default */], { item: item, favorites: favorites, favoriteAction: actions.updateFavorite }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'section',
                        { id: 'pdpDetails' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_app_components_ProductPage_ProductInfo_jsx__["a" /* default */], { item: item, selectedCurrency: selectedCurrency }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_app_components_ProductPage_ProductDescription_jsx__["a" /* default */], { item: item })
                    )
                ) : 'PRODUCT NOT FOUND'
            );
        }
    }]);

    return ProductPageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_3_app_actions_appActions__, dispatch)
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        productPageLoading: state.productPageLoading,
        favorites: state.favorites,
        item: state.product,
        selectedCurrency: state.selectedCurrency
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(ProductPageContainer));

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_actions_appActions__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_store_state__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_config__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





var appReducer = function appReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1_app_store_state__["a" /* default */];
    var action = arguments[1];

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0_app_actions_appActions__["REQUEST_ITEMS"]:
            return _extends({}, state, { listPageLoading: true });
        case __WEBPACK_IMPORTED_MODULE_0_app_actions_appActions__["REQUEST_LOAD_MORE"]:
            return _extends({}, state, { loadMoreLoading: true });
        case __WEBPACK_IMPORTED_MODULE_0_app_actions_appActions__["RECEIVE_ITEMS"]:
            {
                if (action.response != null) {
                    var productList = [].concat(_toConsumableArray(state.productList), _toConsumableArray(action.response.items));
                    return _extends({}, state, { productList: productList, listPageLoading: false,
                        totalItems: action.response.totalItems, listPageIndex: action.pageIndex, loadMoreLoading: false });
                } else return _extends({}, state, { listPageLoading: false, loadMoreLoading: false });
            }
        case __WEBPACK_IMPORTED_MODULE_0_app_actions_appActions__["CHANGE_CURRENCY"]:
            {
                return _extends({}, state, { selectedCurrency: action.currency });
            }
        case __WEBPACK_IMPORTED_MODULE_0_app_actions_appActions__["UPDATE_FAVORITE"]:
            {
                var newFavorites = _extends({}, state.favorites);
                if (action.isFavorite) {
                    delete newFavorites[action.id];
                } else {
                    newFavorites = _extends({}, state.favorites, _defineProperty({}, action.id, true));
                }
                return _extends({}, state, { favorites: newFavorites });
            }
        case __WEBPACK_IMPORTED_MODULE_0_app_actions_appActions__["REQUEST_ITEM"]:
            return _extends({}, state, { productPageLoading: true });
        case __WEBPACK_IMPORTED_MODULE_0_app_actions_appActions__["RECEIVE_ITEM"]:
            return _extends({}, state, { productPageLoading: false, product: action.response });
        default:
            return state;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (appReducer);

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_reducers_appReducer__ = __webpack_require__(153);






var loggerMiddleware = __WEBPACK_IMPORTED_MODULE_2_redux_logger___default()();

var configureStore = function configureStore(initialState) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* createStore */])(__WEBPACK_IMPORTED_MODULE_3_app_reducers_appReducer__["a" /* default */], initialState, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* applyMiddleware */])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a, loggerMiddleware));
};

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_functions__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_config__ = __webpack_require__(13);



var initialState = {
    listPageLoading: false,
    productPageLoading: false,
    loadMoreLoading: false,
    listPageIndex: 1,
    totalItems: 0,
    productList: [],
    product: null,
    favorites: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_app_functions__["d" /* getObjectFromStorage */])(__WEBPACK_IMPORTED_MODULE_1_app_config__["a" /* default */].favoriteKey) || {},
    selectedCurrency: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_app_functions__["e" /* getLocalStorageItem */])(__WEBPACK_IMPORTED_MODULE_1_app_config__["a" /* default */].currencyKey) || 'USD'
};

/* harmony default export */ __webpack_exports__["a"] = (initialState);

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_config__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setLocalStorageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getLocalStorageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getObjectFromStorage; });
/* unused harmony export deleteLocalStorageItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setFavoritesLocalStorage; });


var actionCreator = function actionCreator(type) {
    for (var _len = arguments.length, argNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        argNames[_key - 1] = arguments[_key];
    }

    return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        var action = {
            type: type
        };
        argNames.forEach(function (arg, index) {
            action[argNames[index]] = args[index];
        });
        return action;
    };
};

var setLocalStorageItem = function setLocalStorageItem(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.error(e);
    }
};

var getLocalStorageItem = function getLocalStorageItem(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        console.error(e);
    }
};

var getObjectFromStorage = function getObjectFromStorage(key) {
    var sItem = getLocalStorageItem(key);
    if (sItem != undefined) {
        sItem = JSON.parse(sItem);
    }
    return sItem;
};

var deleteLocalStorageItem = function deleteLocalStorageItem(key) {
    try {
        localStorage.removeItem(key);
    } catch (e) {
        console.error(e);
    }
};

var setFavoritesLocalStorage = function setFavoritesLocalStorage(isFavorite, itemId) {
    var favorites = getObjectFromStorage(__WEBPACK_IMPORTED_MODULE_0_app_config__["a" /* default */].favoriteKey);
    if (isFavorite) delete favorites[itemId];else favorites[itemId] = true;

    setLocalStorageItem(__WEBPACK_IMPORTED_MODULE_0_app_config__["a" /* default */].favoriteKey, JSON.stringify(favorites));
};

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_functions__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_ITEMS", function() { return REQUEST_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_ITEMS", function() { return RECEIVE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_CURRENCY", function() { return CHANGE_CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAVORITE", function() { return UPDATE_FAVORITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_LOAD_MORE", function() { return REQUEST_LOAD_MORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_ITEM", function() { return REQUEST_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_ITEM", function() { return RECEIVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCurrency", function() { return changeCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFavorite", function() { return updateFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });





var REQUEST_ITEMS = 'REQUEST_ITEMS';
var RECEIVE_ITEMS = 'RECEIVE_ITEMS';
var CHANGE_CURRENCY = 'CHANGE_CURRENCY';
var UPDATE_FAVORITE = 'UPDATE_FAVORITE';
var REQUEST_LOAD_MORE = 'REQUEST_LOAD_MORE';

var REQUEST_ITEM = 'REQUEST_ITEM';
var RECEIVE_ITEM = 'RECEIVE_ITEM';

var requestItems = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_app_functions__["a" /* actionCreator */])(REQUEST_ITEMS);
var receiveItems = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_app_functions__["a" /* actionCreator */])(RECEIVE_ITEMS, 'response', 'start', 'pageIndex');
var changeCurrency = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_app_functions__["a" /* actionCreator */])(CHANGE_CURRENCY, 'currency');
var updateFavorite = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_app_functions__["a" /* actionCreator */])(UPDATE_FAVORITE, 'isFavorite', 'id');
var requestLoadMore = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_app_functions__["a" /* actionCreator */])(REQUEST_LOAD_MORE);

var requestItem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_app_functions__["a" /* actionCreator */])(REQUEST_ITEM);
var receiveItem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_app_functions__["a" /* actionCreator */])(RECEIVE_ITEM, 'response');

var getItemsRequest = function getItemsRequest(start, limit, startPageIndex, state) {
    return function (dispatch) {
        if (start < 1) dispatch(requestItems());else {
            dispatch(requestLoadMore());
        }
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_1_app_config__["a" /* default */].getItemsUrl + '?start=' + start + '&limit=' + limit).then(function (response) {
            dispatch(receiveItems(response.data, start, startPageIndex));
        }).catch(function (response) {
            dispatch(receiveItems(null, startPageIndex));
        });
    };
};

var getItems = function getItems(start, startPageIndex) {
    var limit = __WEBPACK_IMPORTED_MODULE_1_app_config__["a" /* default */].itemLimit;
    var startParam = start;
    if (startParam < 1) limit = startPageIndex * __WEBPACK_IMPORTED_MODULE_1_app_config__["a" /* default */].itemLimit;else {
        startParam = start * __WEBPACK_IMPORTED_MODULE_1_app_config__["a" /* default */].itemLimit;
    }
    return function (dispatch, getState) {
        return dispatch(getItemsRequest(startParam, limit, startPageIndex, getState()));
    };
};

var getItemRequest = function getItemRequest(itemId, state) {
    return function (dispatch) {
        dispatch(requestItem());
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_1_app_config__["a" /* default */].getItemUrlBase + itemId + __WEBPACK_IMPORTED_MODULE_1_app_config__["a" /* default */].getItemurl).then(function (response) {
            dispatch(receiveItem(response.data));
        }).catch(function (response) {
            dispatch(receiveItem(null));
        });
    };
};

var getItem = function getItem(itemId) {
    return function (dispatch, getState) {
        return dispatch(getItemRequest(itemId, getState()));
    };
};



/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_functions__ = __webpack_require__(32);




var FavoriteIcon = function FavoriteIcon(_ref) {
    var url = _ref.url,
        favoriteAction = _ref.favoriteAction,
        itemId = _ref.itemId,
        isFavorite = _ref.isFavorite;

    var handleFavoriteAction = function handleFavoriteAction() {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_app_functions__["b" /* setFavoritesLocalStorage */])(isFavorite, itemId);
        favoriteAction(isFavorite, itemId);
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: isFavorite ? 'heart saved' : 'heart', title: isFavorite ? 'Remove From Favorites' : 'Add To Favorites',
        onClick: handleFavoriteAction });
};

/* harmony default export */ __webpack_exports__["a"] = (FavoriteIcon);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var ItemImage = function ItemImage(_ref) {
    var url = _ref.url,
        cName = _ref.cName;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url, className: cName });
};

/* harmony default export */ __webpack_exports__["a"] = (ItemImage);

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_Common_Currency_jsx__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_Common_HomeLink_jsx__ = __webpack_require__(143);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangeCurrency = function (currency) {
            _this.props.actions.changeCurrency(currency);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'header',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_app_components_Common_HomeLink_jsx__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    null,
                    this.props.headerText
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_app_components_Common_Currency_jsx__["a" /* default */], { selectedCurrency: this.props.selectedCurrency, changeCurrencyCallback: this.handleChangeCurrency })
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var ItemImage = function ItemImage(_ref) {
    var width = _ref.width,
        cName = _ref.cName;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/img/loading.gif", className: cName, width: width });
};

/* harmony default export */ __webpack_exports__["a"] = (ItemImage);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Price = function Price(_ref) {
    var price = _ref.price;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "price" },
        price
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Price);

/***/ })

},[309]);