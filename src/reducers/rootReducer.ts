import {combineReducers} from 'redux'
import teamReducer from '../reducers/teamReducer'

const rootReducer = combineReducers({
    teams: teamReducer
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;