import { compose, applyMiddleware, createStore } from 'redux';

import indexReducer from '../reducers/indexReducer';


const enhancer = compose(
    applyMiddleware(
    ),
);

const store = createStore(indexReducer, {}, enhancer);

export default store;