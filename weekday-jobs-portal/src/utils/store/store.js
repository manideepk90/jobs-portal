
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import {Store } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import  { jobsSlice } from './reducers/jobsReducer'
const store = (context) => configureStore({
    reducer : {
        jobs : jobsSlice.reducer
    }
})

export const wrapper = createWrapper(store, {debug: true});
