import React from 'React';
import styled from 'styled-components';
import { Col, Row } from 'styled-components-flexboxgrid';

const StyledItemContainer = styled.div`
    background-color: #ffffff;
    padding: .5rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    border-radius: 2px;
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
        <StyledItemContainer>
            <StyledItemImage src={props.image} />
            <Row>
                <StyledPrice>{price}</StyledPrice>
                <StyledFavourite>Love</StyledFavourite>
            </Row>
        </StyledItemContainer>
    );
}

export default BrowseItem;