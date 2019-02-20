import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

export const Container: StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled.div`
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
`;
