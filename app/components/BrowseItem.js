import React from 'React';
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
`;

const StyledItemImage = styled.img`
    text-align: center;
`;

const StyledPrice = styled(Col)`
    font-size: 12px;
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
        <StyledItemContainer to={`/product/${props.id}`}>
            <StyledItemImage src={props.image} />
            <Row>
                <StyledPrice>{price}</StyledPrice>
                <StyledFavourite>Love</StyledFavourite>
            </Row>
        </StyledItemContainer>
    );
}

export default BrowseItem;