import {
    createStore,
    applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export default function store(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)
    return store;
}