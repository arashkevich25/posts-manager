import Button from '@material-ui/core/Button';
import * as React from 'react';
import { connect } from 'react-redux';
import { deletePost, updatePost } from '../../../actions/app';
import { Modal } from '../../../components/Modal/Modal';
import { IPost } from '../../../interfaces/Post';
import { CardActionsStyled } from '../styled/CardActionsStyled';
import { CardContentStyled } from '../styled/CardContentStyled';
import { CardStyled } from '../styled/CardStyled';
import { NewPostForm } from './NewPostForm';
import { RemoveApproveForm } from './RemoveApproveForm';

interface IComponentProps extends IPost {
    updatePost: (post: IPost) => void;
    deletePostHandle: (id: number) => void;
}

class Component extends React.PureComponent<IComponentProps> {
    public render(): React.ReactNode {
        const { userId, id, title, body } = this.props;

        return (
            <CardStyled>
                <CardContentStyled>
                    <div><b>User ID: </b>{userId}</div>
                    <div><b>Post ID: </b>{id}</div>
                    <div><b>Post title: </b>{title}</div>
                    <div><b>Post content: </b>{body}</div>
                </CardContentStyled>
                <CardActionsStyled>
                    <Button variant="contained" size="small" onClick={this.openEditPostModal}>Edit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={this.openRemoveApproveForm}>Remove</Button>
                </CardActionsStyled>
            </CardStyled>
        )
    };

    private openEditPostModal = (): void => {
        const { userId, id, title, body } = this.props;
        Modal.openModal(NewPostForm, {
            body,
            closePostModal: this.closeEditPostModal,
            id,
            title,
            updateCreatePostHandle: this.updatePost,
            userId,
        });
    };

    private closeEditPostModal(): void {
        Modal.closeModal();
    };

    private updatePost = (post: IPost): void => {
        this.props.updatePost(post);
        this.closeEditPostModal();
    };

    private openRemoveApproveForm = (): void => {
        const { id, deletePostHandle } = this.props;
        Modal.openModal(RemoveApproveForm, {
            closePostModal: this.closeEditPostModal,
            deletePost: deletePostHandle,
            id,
        });
    };
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch: any) {
    return {
        deletePostHandle: (id: number) => dispatch(deletePost(id)),
        updatePost: (post: IPost) => dispatch(updatePost(post)),
    };
}


export const PostCard = connect(mapStateToProps, mapDispatchToProps)(Component);