import * as React from 'react';
import { Provider } from 'react-redux'
import { Modal } from '../../components/Modal/Modal';
import { store } from '../../store';
import { Dashboard } from '../../views/Dashboard';

export class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Provider store={store}>
                <Modal/>
                <Dashboard/>
            </Provider>
        )
    };
}