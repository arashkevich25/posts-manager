import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

export const PostFormContainer: StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const PostFormBase:  StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled.div`
    background-color: white;
    box-shadow: 0 0 19px -6px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: column;
`;

export const PostFormBox: StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled(PostFormBase)`
    width: 400px;
    padding: 30px;
`;

export const ApproveRemoveBox: StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled(PostFormBase)`
    width: 500px;
    height: 150px;
    align-items: center;
    justify-content: space-evenly;
`;

export const ButtonsPanel: StyledComponent<any, React.HTMLProps<HTMLDivElement>> = styled.div`
    width: 100%;
    display: flex;
    justify-content: inherit;
`;

