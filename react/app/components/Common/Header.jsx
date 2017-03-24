import React from 'react';

import Currency from 'app/components/Common/Currency.jsx';
import HomeLink from 'app/components/Common/HomeLink.jsx';

class Header extends React.Component {
    handleChangeCurrency = currency => {
        this.props.actions.changeCurrency(currency);
    }

    render() {
        return (
            <header>
                <HomeLink />
                <h1>{this.props.headerText}</h1>
                <Currency selectedCurrency={this.props.selectedCurrency}  changeCurrencyCallback={this.handleChangeCurrency}/>
            </header>
        )
    }
};

export default Header;
