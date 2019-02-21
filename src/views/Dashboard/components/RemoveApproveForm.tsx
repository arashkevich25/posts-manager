import Button from '@material-ui/core/Button';
import * as React from 'react';
import { ApproveRemoveBox, ButtonsPanel, PostFormContainer } from '../styled';

interface IRemoveApproveForm {
    id: number;
    deletePost: (id: number) => void;
    closePostModal: () => void;
}

export class RemoveApproveForm extends React.PureComponent<IRemoveApproveForm> {
    public render(): React.ReactNode {
        const { closePostModal } = this.props;

        return (
            <PostFormContainer>
                <ApproveRemoveBox>
                    <h2>Would you like remove post?</h2>
                    <ButtonsPanel>
                        <Button variant="contained" color="secondary" onClick={this.deletePost}>
                            Delete
                        </Button>
                        <Button variant="outlined" onClick={closePostModal}>Cancel</Button>
                    </ButtonsPanel>
                </ApproveRemoveBox>
            </PostFormContainer>
        )
    };

    private deletePost = (): void => {
        const { deletePost, id, closePostModal } = this.props;
        deletePost(id);
        closePostModal();
    };
}