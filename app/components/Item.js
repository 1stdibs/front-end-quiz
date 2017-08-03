import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Col, Row } from 'styled-components-flexboxgrid';
import { colors } from '../utils/style';
import ShadowBox from './ShadowBox';
import Heart from './Heart';

const StyledItemWrapper = styled(Row)`
    margin: 1rem;
`;

const StyledImageCol = Col.withComponent(ShadowBox).extend`
    position: relative;
    text-align: center;
    margin-right: 1rem;
`;

const StyledHeart = styled(Heart)`
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
`;

const StyledDetailsCol = styled(Col)`
    padding: 0;
`;

const StyledDetailsBox = styled(ShadowBox)`
    padding-bottom: 0;
    margin-bottom: 1rem;
`;

const StyledTitle = styled.h2`
    font-size: 1.4rem;
    margin-top: 0;
`;

const StyledPrice = styled.p`
    font-size: 1.4rem;
`;

const StyledMeasurements = styled.p`
    font-size: 1.2rem;
    color: ${colors.text.muted};
`;

const StyledActionListRow = styled(Row)`
    border-top: 1px solid rgba(0, 0, 0, .05);
`;

const StyledActionCol = Col.withComponent('a').extend`
    font-size: 1.2rem;
    padding: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    &:not(:last-child) {
        border-right: 1px solid rgba(0, 0, 0, .05);
    }
`;

const StyledCreators = styled.div`
    font-size: 1.2rem;
    color: ${colors.text.muted};
    margin-top: 1rem;
`;

const actions = ['Purchase', 'Make offer'];
const getPrice = (price) => price ? price.amounts.USD : 'Price Upon Request';
const toggleLike = (action, id, event) => {
    event.preventDefault();
    action(id);
};
const onActionClick = (name) => alert(`Action ${name} is currently unavailable.`);

const Item = (props) => {
    const creators = props.creators ? <StyledCreators>Creators: {props.creators}</StyledCreators> : null;
    return (
        <StyledItemWrapper>
            <StyledImageCol xs={12} sm={6} md={4}>
                <img src={props.image} alt={props.title} />
                <StyledHeart active={props.isLiked} onClick={toggleLike.bind(this, props.onClick, props.id)} />
            </StyledImageCol>
            <StyledDetailsCol>
                <StyledDetailsBox>
                    <StyledTitle>{props.title}</StyledTitle>
                    <StyledPrice>{getPrice(props.price)}</StyledPrice>
                    <StyledMeasurements>
                        Measurements:<br />
                        {props.measurements.display}
                    </StyledMeasurements>
                    <StyledActionListRow>
                        {actions.map((action, index) =>
                            <StyledActionCol key={index} onClick={onActionClick.bind(this, action.toLocaleLowerCase())}>
                                {action}
                            </StyledActionCol>
                        )}
                    </StyledActionListRow>
                </StyledDetailsBox>
                <ShadowBox>
                    <span dangerouslySetInnerHTML={{__html: props.description}} />
                    {creators}
                </ShadowBox>
            </StyledDetailsCol>
        </StyledItemWrapper>
    );
};

export default Item;

Item.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amounts: PropTypes.shape({
            EUR: PropTypes.string,
            GBP: PropTypes.string,
            USD: PropTypes.string
        })
    }),
    measurements: PropTypes.shape({
        display: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired,
    creators: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};
