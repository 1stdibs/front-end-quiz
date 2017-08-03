import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Col, Row } from 'styled-components-flexboxgrid';
import { colors } from '../utils/style';
import ShadowBox from './ShadowBox';
import Heart from './Heart';

const StyledItemContainer = styled(Link)`
    display: block;
    color: ${colors.text.primary};
    text-decoration: none;
    text-align: center;
`;

const StyledPrice = styled(Col)`
    text-align: left;
`;

const StyledFavouriteCol = styled(Col)`
    position: relative;
`;

const StyledHeart = styled(Heart)`
    position: absolute;
    right: 1rem;
    top: .5rem;
    z-index: 1;
    cursor: pointer;
`;

const getPrice = (price) => price ? price.amounts.USD : 'Price Upon Request';

const toggleLike = (action, id, event) => {
    event.preventDefault();
    action(id);
};

const BrowseItem = (props) => {            
    return (
        <ShadowBox>
            <StyledItemContainer to={`/item/${props.id}`}>
                <img src={props.image} />
                <Row>
                    <StyledPrice>
                        {getPrice(props.price)}
                    </StyledPrice>
                    <StyledFavouriteCol>
                        <StyledHeart active={props.isLiked} onClick={toggleLike.bind(this, props.onClick, props.id)} />
                    </StyledFavouriteCol>
                </Row>
            </StyledItemContainer>
        </ShadowBox>
    );
};

export default BrowseItem;

BrowseItem.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amounts: PropTypes.objectOf(PropTypes.string)
    }),
    isLiked: PropTypes.bool.isRequired
};