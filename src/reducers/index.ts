import * as actionTypes from '../constants/actionTypes';
import { IPost } from '../interfaces/Post';

export interface IAppState {
    error: Error;
    posts: IPost[];
    postsIsProcessing: boolean;
}

const initialState: IAppState = {
    error: new Error(''),
    posts: [],
    postsIsProcessing: false,
};


export function reducer(state: IAppState = initialState, action: actionTypes.AppActionTypes): IAppState {
    switch (action.type) {

        case actionTypes.UPDATE_POST:
        case actionTypes.DELETE_POST:
        case actionTypes.ADD_NEW_POST:
        case actionTypes.GET_POSTS:
            return {
                ...state,
                postsIsProcessing: true,
            };

        case actionTypes.ADD_NEW_POST_FAILURE:
        case actionTypes.DELETE_POST_FAILURE:
        case actionTypes.UPDATE_POST_FAILURE:
        case actionTypes.GET_POSTS_FAILURE:
            return {
                ...state,
                error: action.error,
                postsIsProcessing: false,
            };

        case actionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts,
                postsIsProcessing: false,
            };

        case actionTypes.ADD_NEW_POST_SUCCESS:
            const withNewPost: IPost[] = [...state.posts];
            withNewPost.push(action.post);
            withNewPost.sort((postA: IPost, postB: IPost) => postA.id - postB.id);
            return {
                ...state,
                posts: [...withNewPost],
                postsIsProcessing: false,
            };

        case actionTypes.UPDATE_POST_SUCCESS:
            let postsAfterUpdate: IPost[] = [...state.posts];
            postsAfterUpdate = postsAfterUpdate.filter((post: IPost) => action.post.id !== post.id);
            postsAfterUpdate.push(action.post);
            postsAfterUpdate.sort((postA: IPost, postB: IPost) => postA.id - postB.id);
            return {
                ...state,
                posts: [...postsAfterUpdate],
                postsIsProcessing: false,
            };

        case actionTypes.DELETE_POST_SUCCESS:
            let postsAfterDelete: IPost[] = [...state.posts];
            postsAfterDelete = postsAfterDelete.filter((post: IPost) => action.id !== post.id);
            return {
                ...state,
                posts: [...postsAfterDelete],
                postsIsProcessing: false,
            };

        default:
            return state;
    }
}