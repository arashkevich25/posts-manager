import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { API } from '../api/apiUrl';
import * as actionTypes from '../constants/actionTypes';
import { IPost } from '../interfaces/Post';
import { IAppState } from '../reducers';

export function getPosts(): ThunkAction<void, IAppState, null, Action> {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_POSTS,
        });

        try {
            const response = await fetch(API);
            const posts = await response.json();
            dispatch(getPostsSuccess(posts));
        } catch (e) {
            dispatch(getPostsFailure(e));
        }
    };
}

function getPostsSuccess(posts: IPost[]) {
    return {
        posts,
        type: actionTypes.GET_POSTS_SUCCESS,
    }
}

function getPostsFailure(error: Error) {
    return {
        error,
        type: actionTypes.GET_POSTS_FAILURE,
    }
}

export function addNewPost(newPost: IPost): ThunkAction<void, IAppState, null, Action> {
    return async dispatch => {
        dispatch({
            type: actionTypes.ADD_NEW_POST,
        });

        try {
            const response = await fetch(API, {
                body: JSON.stringify(newPost),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                method: 'POST',
            });
            const post = await response.json();
            dispatch(addNewPostSuccess(post));
        } catch (e) {
            dispatch(addNewPostFailure(e));
        }
    };
}

function addNewPostSuccess(post: IPost) {
    return {
        post,
        type: actionTypes.ADD_NEW_POST_SUCCESS,
    }
}

function addNewPostFailure(error: Error) {
    return {
        error,
        type: actionTypes.ADD_NEW_POST_FAILURE,
    }
}

export function updatePost(newPost: IPost): ThunkAction<void, IAppState, null, Action> {
    return async dispatch => {
        dispatch({
            type: actionTypes.UPDATE_POST,
        });

        try {
            const response = await fetch(`${API}/${newPost.id}`, {
                body: JSON.stringify(newPost),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                method: 'PUT',
            });
            const post = await response.json();
            dispatch(updatePostSuccess(post));
        } catch (e) {
            dispatch(updatePostFailure(e));
        }
    };
}

function updatePostSuccess(post: IPost) {
    return {
        post,
        type: actionTypes.UPDATE_POST_SUCCESS,
    }
}

function updatePostFailure(error: Error) {
    return {
        error,
        type: actionTypes.UPDATE_POST_FAILURE,
    }
}

export function deletePost(postId: number): ThunkAction<void, IAppState, null, Action> {
    return async dispatch => {
        dispatch({
            type: actionTypes.DELETE_POST,
        });

        try {
            await fetch(`${API}/${postId}`, {
                method: 'DELETE',
            });
            dispatch(deletePostSuccess(postId));
        } catch (e) {
            dispatch(deletePostFailure(e));
        }
    }

}

function deletePostSuccess(id: number) {
    return {
        id,
        type: actionTypes.DELETE_POST_SUCCESS,
    }
}

function deletePostFailure(error: Error) {
    return {
        error,
        type: actionTypes.DELETE_POST_FAILURE,
    }
}