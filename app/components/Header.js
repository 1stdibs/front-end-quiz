import React from 'React';
import styled from 'styled-components';
import { colors, font } from '../utils/style';

const StyledHeader = styled.h1`
    font-size: 16px;
    font-weight: ${font.weight.bold};
    text-transform: uppercase;
    color: ${colors.text.primary};
    background-color: ${colors.white};
    text-align: center;
    margin: 0 0 1.2rem;
    padding: 1rem 0;
    border-bottom: 2px solid #eeeeee;
`;

const Header = (props) => {
    return (
        <StyledHeader>{props.title}</StyledHeader>
    );
}

export default Header;