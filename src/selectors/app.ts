import { IPost } from '../interfaces/Post';
import { IAppState } from '../reducers';

export function getAppPosts(state: IAppState): IPost[] {
    return state.posts;
}

export function getAppPostsIsProcessing(state: IAppState): boolean {
    return state.postsIsProcessing;
}