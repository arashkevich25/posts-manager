import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

export const Container: StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
