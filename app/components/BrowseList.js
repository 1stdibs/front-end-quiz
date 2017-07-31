import React from 'React';
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
                    <BrowseItem id={item.id} image={item.image} price={item.price} />
                </StyledCol>
            )}
        </Row>
    );
}

export default BrowseList;