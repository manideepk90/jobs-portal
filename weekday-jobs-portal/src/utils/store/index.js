import {  applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers'; 

const makeStore = () => createStore(rootReducer, applyMiddleware(thunkMiddleware));
export const wrapper = createWrapper(makeStore);