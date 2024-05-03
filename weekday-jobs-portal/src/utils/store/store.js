
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import {Store } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from './reducers/jobsReducer'
const store = (context) => configureStore({
    reducer : {
        jobs : jobsReducer
    }
})

export const wrapper = createWrapper(store, {debug: true});
