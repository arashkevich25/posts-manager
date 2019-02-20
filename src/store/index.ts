import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { AppActionTypes } from '../constants/actionTypes';
import { IAppState, reducer } from '../reducers';

export const store: Store<IAppState, AppActionTypes> = createStore(reducer, {}, composeWithDevTools(applyMiddleware(thunk)));