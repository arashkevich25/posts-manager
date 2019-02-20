import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

export const NewPostButtonStyled: StyledComponent<any, React.HTMLProps<HTMLButtonElement>> = styled.button`
    width: 400px;
    height: 250px;
    border-radius: 4px;
    background-color: white;
    border-color: black;
    border-style: dashed;
    cursor: pointer;
    margin: 20px;
    transition: background-color 0.5s ease;
    outline: none;
    
    :hover {
      background-color: #7daaed;
      color: white;
    }
`;

export const PlusStyled: StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled.div`
    font-size: 70px;
`;

export const AddPostLabel:  StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled.div`
    font-size: 18px;
`;
