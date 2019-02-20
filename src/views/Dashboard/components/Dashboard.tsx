import * as React from 'react';
import { FullPageLoader } from '../../../components';
import { IPost } from '../../../interfaces/Post';
import { Container } from '../styled/Container';
import { NewPostButton } from './NewPostButton';
import { PostCard } from './PostCard';

interface IDashboardProps {
    getPosts: any;
    postsIsProcessing: boolean;
    allPosts: IPost[];
}

export class Dashboard extends React.PureComponent<IDashboardProps> {

    public componentDidMount(): void {
        this.props.getPosts();
    };

    public render(): React.ReactNode {
        const { postsIsProcessing, allPosts } = this.props;

        if (!allPosts || postsIsProcessing) {
            return <FullPageLoader/>
        }

        return (
            <Container>
                <NewPostButton lastPostId={allPosts[allPosts.length - 1].id + 1}/>
                {
                    allPosts.map((post: IPost, key: number) =>
                        <PostCard
                            key={key}
                            body={post.body}
                            id={post.id}
                            title={post.title}
                            userId={post.userId}
                    />)
                }
            </Container>
        );
    };

}
