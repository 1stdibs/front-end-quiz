import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Row } from 'styled-components-flexboxgrid';
import BrowseItem from './BrowseItem';

const StyledCol = styled(Col)`
    margin: 1rem;
`;

const BrowseList = (props) => {
    return (
        <Row>
            {props.items.map((item, index) =>
                <StyledCol key={index}>
                    <BrowseItem
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        isLiked={item.isLiked}
                        onClick={props.toggleLike}
                    />
                </StyledCol>
            )}
        </Row>
    );
}

export default BrowseList;

BrowseList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.shape({
            amounts: PropTypes.objectOf(PropTypes.string)
        })
    })).isRequired
};
