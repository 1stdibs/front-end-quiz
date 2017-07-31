import React from 'React';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Col, Row } from 'styled-components-flexboxgrid';
import { colors, border } from '../utils/style';

const StyledItemContainer = styled(Link)`
    display: block;
    background-color: ${colors.white};
    padding: .8rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    border-radius: ${border.radius};
    color: ${colors.text.primary};
    text-decoration: none;
`;

const StyledItemImage = styled.img`
    text-align: center;
`;

const StyledFavourite = styled(Col)`
    text-align: right;
`;


const BrowseItem = (props) => {    
    let price;
    if (props.price) {
        price = props.price.amounts.USD;
    }
    return (
        <StyledItemContainer to={`/item/${props.id}`}>
            <StyledItemImage src={props.image} />
            <Row>
                <Col>{price}</Col>
                <StyledFavourite>Love</StyledFavourite>
            </Row>
        </StyledItemContainer>
    );
};

BrowseItem.PropTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amounts: PropTypes.objectOf(PropTypes.string)
    })
};

export default BrowseItem;