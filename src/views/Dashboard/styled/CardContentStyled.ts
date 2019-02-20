import CardContent from '@material-ui/core/CardContent';
import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

export const CardContentStyled: StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled(CardContent)`
    height: 155px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 25px;
    margin-bottom: 10px;
`;
