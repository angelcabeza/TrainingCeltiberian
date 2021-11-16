import {combineReducers} from 'redux'
import teamReducer from '../reducers/teamReducer'
import authReducer from './authReducer';

const rootReducer = combineReducers({
    teams: teamReducer,
    auth: authReducer
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;