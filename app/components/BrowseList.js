import React from 'React';
import styled from 'styled-components';
import { Col, Row } from 'styled-components-flexboxgrid';
import BrowseItem from './BrowseItem';

const StyledRow = styled(Row)`
    width: 95%;
    margin: 0 auto;
`;

const StyledCol = styled(Col)`
    margin: 1rem;
`;

const BrowseList = (props) => {
    props.items.map(item => {
        console.log(item);
    });
    
    return (
        <Row>
            {props.items.map((item, index) =>
                <StyledCol key={index}>
                    <BrowseItem image={item.image} price={item.price} />
                </StyledCol>
            )}
        </Row>
    );
}

export default BrowseList;