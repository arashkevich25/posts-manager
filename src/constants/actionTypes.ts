import { IPost } from '../interfaces/Post';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

interface IGetPostsAction {
    type: typeof GET_POSTS;
}

interface IGetPostsSuccessAction {
    type: typeof GET_POSTS_SUCCESS;
    posts: IPost[];
}

interface IGetPostsFailureAction {
    type: typeof GET_POSTS_FAILURE;
    error: Error;
}

export const ADD_NEW_POST = 'ADD_NEW_POST';
export const ADD_NEW_POST_SUCCESS = 'ADD_NEW_POST_SUCCESS';
export const ADD_NEW_POST_FAILURE = 'ADD_NEW_POST_FAILURE';

interface IAddNewPostsAction {
    type: typeof ADD_NEW_POST;
}

interface IAddNewPostsSuccessAction {
    type: typeof ADD_NEW_POST_SUCCESS;
    post: IPost;
}

interface IAddNewPostsFailureAction {
    type: typeof ADD_NEW_POST_FAILURE;
    error: Error;
}

export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

interface IUpdatePostAction {
    type: typeof UPDATE_POST;
}

interface IUpdatePostSuccessAction {
    type: typeof UPDATE_POST_SUCCESS;
    post: IPost;
}

interface IUpdatePostFailureAction {
    type: typeof UPDATE_POST_FAILURE;
    error: Error;
}

export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

interface IDeletePostAction {
    type: typeof DELETE_POST;
}

interface IDeletePostSuccessAction {
    type: typeof DELETE_POST_SUCCESS;
    id: number,
}

interface IDeletePostFailureAction {
    type: typeof DELETE_POST_FAILURE;
    error: Error;
}

export type AppActionTypes =
    IGetPostsAction |
    IGetPostsSuccessAction |
    IGetPostsFailureAction |
    IAddNewPostsAction |
    IAddNewPostsSuccessAction |
    IAddNewPostsFailureAction |
    IUpdatePostAction |
    IUpdatePostSuccessAction |
    IUpdatePostFailureAction |
    IDeletePostAction |
    IDeletePostSuccessAction |
    IDeletePostFailureAction;
