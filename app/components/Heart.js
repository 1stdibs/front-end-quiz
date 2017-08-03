import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../utils/style';

const size = 10;
const color = {
    active: {
        default: 'rgb(240, 0, 75)',
        focus: 'rgb(162, 8, 56)'
    },
    inactive: {
        default: colors.muted,
        focus: 'rgb(212, 208, 194)'
    }
};

const StyledHeart = styled.div`
    background-color: ${props => props.active ? color.active.default : color.inactive.default};
    display: inline-block;
    width: ${size}px;
    height: ${size}px;
    position: relative;
    transform: rotate(-45deg);
    &::before, &::after {
        content: '';
        background-color: ${props => props.active ? color.active.default : color.inactive.default};
        border-radius: 50%;
        width: ${size}px;
        height: ${size}px;
        position: absolute;
    }
    &::before {
        top: -${size / 2}px;
        left: 0;
    }
    &::after {
        left: ${size / 2}px;
        top: 0;
    }
    &:active, &:active:before, &:active:after {
        background-color: ${props => props.active ? color.active.focus : color.inactive.focus};
    }
`;

const Heart = (props) => {
    return (<StyledHeart {...props} />);
};

export default Heart;

Heart.propTypes = { active: PropTypes.bool.isRequired };