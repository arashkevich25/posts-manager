import { CardActions } from '@material-ui/core';
import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

export const CardActionsStyled: StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled(CardActions)`
    justify-content: space-between;
`;
