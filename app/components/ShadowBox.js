import React from 'react';
import styled from 'styled-components';
import { colors, border } from '../utils/style';

const StyledShadowBox = styled.div`
     background-color: ${colors.white};
     padding: 1.2rem;
     box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
     border-radius: ${border.radius};
 `;

const ShadowBox = (props) => {
    return (
        <StyledShadowBox {...props}>
            {props.children}
        </StyledShadowBox>
    );
};

export default ShadowBox;
