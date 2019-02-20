import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';

import { Container } from './styled/Container';

export class FullPageLoader extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <Container>
                <CircularProgress/>
            </Container>
        )
    }
}
