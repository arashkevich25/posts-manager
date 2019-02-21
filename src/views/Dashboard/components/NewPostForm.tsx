import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { IPost } from '../../../interfaces/Post';
import { PostFormBox, PostFormContainer } from '../styled';

interface INewPostFormState {
    userId: number;
    id: number;
    title: string;
    body: string;
    [key: string]: number | string;
}

interface INewPostFormProps extends Partial<IPost>{
    closePostModal: () => void;
    updateCreatePostHandle: (post: IPost) => void;
    lastPostId: number;
}

export class NewPostForm extends React.PureComponent<INewPostFormProps, INewPostFormState> {

    public constructor(props: INewPostFormProps) {
        super(props);
        const { userId, id, body, title, lastPostId } = this.props;

        const idUser: number = userId ? userId : Math.floor(Math.random() * 1000);
        const postId: number | string = id ? id : lastPostId;
        const bodyPost: string = body ? body : '';
        const titlePost: string = title ? title : '';

        this.state = {
            body: bodyPost,
            id: postId,
            title: titlePost,
            userId: idUser,
        }
    };

    public render(): React.ReactNode {
        const { id, userId, title, body } = this.state;

        return (
            <PostFormContainer>
                <PostFormBox as="form">
                    <h2>Update or create new post</h2>
                    <TextField
                        id="userId"
                        label="User ID"
                        margin="normal"
                        variant="outlined"
                        value={userId}
                        disabled={true}
                    />
                    <TextField
                        id="id"
                        label="Post ID"
                        margin="normal"
                        variant="outlined"
                        disabled={true}
                        value={id}
                    />
                    <TextField
                        id="title"
                        label="Post title"
                        margin="normal"
                        variant="outlined"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <TextField
                        id="body"
                        label="Post content"
                        multiline={true}
                        rowsMax="4"
                        rows="4"
                        margin="normal"
                        variant="outlined"
                        value={body}
                        onChange={this.handleChange}
                    />
                    <Button color="primary" onClick={this.createUpdatePost}>Create / Update</Button>
                    <Button onClick={this.props.closePostModal}>Close</Button>
                </PostFormBox>
            </PostFormContainer>
        )
    };

    private createUpdatePost = (): void => {
        const { updateCreatePostHandle } = this.props;
        const { userId, id, title, body } = this.state;
        updateCreatePostHandle({ userId, id, title, body });
    };

    private handleChange = (e: any): void => {
        this.setState({ [e.target.id]: e.target.value });
    };
}
