import React from 'react';

class LoadMore extends React.Component {
    handleClick = () => {
        let index = this.props.pageIndex;
        this.props.history.push('/browse/' + (index + 1));
        this.props.actions.getItems(index, index + 1)
    }

    render() {
        return (
            <div id="loadMoreProducts" onClick={this.handleClick}>
                Load More
            </div>
        )
    }
}

export default LoadMore;
