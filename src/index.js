import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//bring in reducer data
const feeling = (state = {value: ''}, action) => {
    if (action.type === 'FEELING' ){
        return {value: action.payload};
    }else if (action.type === 'reset'){
        return {value:''}
    }
    return state;
}

const understanding = (state = {value: ''}, action) => {
    if (action.type === 'UNDERSTANDING' ){
        return {value: action.payload};
    }else if (action.type === 'reset'){
        return {value:''}
    }
    return state;
}

const support = (state = {value: ''}, action) => {
    if (action.type === 'SUPPORT' ){
        return {value: action.payload};
    }else if (action.type === 'reset'){
        return {value:''}
    }
    return state;
}

const comments = (state = {value: ''}, action) => {
    if (action.type === 'COMMENTS' ){
        return {value: action.payload};
    }else if (action.type === 'reset'){
        return {value:''}
    }
    return state;
}

//combine reducers...
const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();