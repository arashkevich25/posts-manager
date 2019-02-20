import { Card } from '@material-ui/core';
import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

export const CardStyled: StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled(Card)`
    width: 400px;
    margin: 20px;
    height: 250px;
`;
