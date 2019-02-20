import * as React from 'react';
import { BackgroundLayer } from './styled/BackgroundLayer';
import { Container } from './styled/Container';

interface IState {
    Component: React.ReactNode | null;
    isVisible: boolean;
    props: any;
}

export class Modal extends React.PureComponent<{}, IState> {

    public static modalRef: any;

    public static assign(ref: React.ReactNode) {
        Modal.modalRef = ref;
    }

    public static openModal(Component: React.ReactNode, props: any) {
        Modal.modalRef.setState({isVisible: true, Component, props})
    }

    public static closeModal() {
        Modal.modalRef.setState({isVisible: false, Component: null, props: null})
    }

    constructor(props: any) {
        super(props);

        this.state = {
            Component: null,
            isVisible: false,
            props: null,
        };
    }

    public componentDidMount() {
        Modal.assign(this);
    }

    public render() {
        const { Component } = this.state;

        if (!Component) {
            return null;
        }

        return (
            <Container isVisible={this.state.isVisible}>
                <BackgroundLayer/>
                {
                    // @ts-ignore
                    <Component {...this.state.props}/>
                }
            </Container>
        );
    }
}
