// src/store.js
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import taskReducer from './src/reducers/taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

const store = configureStore({reducer: rootReducer});
export default store;
