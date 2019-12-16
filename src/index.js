import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//bring in reducer data
const feelingReducer = (state = [], action) => {
    if (action.type === 'FEELING' ){
        return {value: action.payload};
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'UNDERSTANDING' ){
        return {value: action.payload};
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if (action.type === 'SUPPORT' ){
        return {value: action.payload};
    }
    return state;
}

const commentsReducer = (state = [], action) => {
    if (action.type === 'COMMENTS' ){
        return {value: action.payload};
    }
    return state;
}

//combine reducers...
const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();