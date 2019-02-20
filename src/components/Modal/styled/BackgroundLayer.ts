import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

export const BackgroundLayer: StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled.div`
    background-color: white;
    opacity: 0.7;
    width: 100%;
    height: 100%;
    position: absolute;
`;
