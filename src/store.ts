import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { State } from './actions/types'

const initialState: State = {
    teams: []
};

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;