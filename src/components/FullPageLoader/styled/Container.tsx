import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

export const Container: StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
