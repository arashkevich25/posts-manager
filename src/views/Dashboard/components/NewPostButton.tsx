import * as React from 'react';
import { connect } from 'react-redux';
import { addNewPost } from '../../../actions/app';
import { Modal } from '../../../components';
import { IPost } from '../../../interfaces/Post';
import { AddPostLabel, NewPostButtonStyled, PlusStyled } from '../styled';
import { NewPostForm } from './NewPostForm';

interface IComponentProps {
    addNewPost: (post: IPost) => void;
    lastPostId: number;
}

class Component extends React.PureComponent<IComponentProps> {
    public render(): React.ReactNode {
        return (
            <NewPostButtonStyled onClick={this.openPostModal}>
                <PlusStyled>+</PlusStyled>
                <AddPostLabel>Add new post</AddPostLabel>
            </NewPostButtonStyled>
        )
    }

    private openPostModal = (): void => {
        Modal.openModal(NewPostForm, {
            closePostModal: this.closePostModal,
            lastPostId: this.props.lastPostId,
            updateCreatePostHandle: this.createNewPost,
        })
    };

    private closePostModal(): void {
        Modal.closeModal();
    };

    private createNewPost = (post: IPost): void => {
        this.props.addNewPost(post);
        this.closePostModal();
    };
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch: any) {
    return {
        addNewPost: (post: IPost) => dispatch(addNewPost(post)),
    }
}


export const NewPostButton = connect(mapStateToProps, mapDispatchToProps)(Component);