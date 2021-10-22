import {Action, ActionTypes } from '../actions/types'
import { State } from '../actions/teamActions'
import { Reducer } from 'redux'

const initialState:State = {
    teamsVector: []
};

const teamReducer : Reducer<State,Action> = (state:State = initialState, action: Action)  => {
    
    switch (action.type) {
        case ActionTypes.CREATE_TEAM:

           return {
                ...state, 
                teamsVector: {...state.teamsVector,...action.payload}
            } 

        case ActionTypes.DELETE_ALL_TEAMS:
            return {
                ...state,
                teamsVector: []
            };
        
        case ActionTypes.DELETE_TEAM:
            return {
                ...state,
                teamsVector: state.teamsVector.filter((ele) => ele.id !== action.payload)
            }

        case ActionTypes.GET_ALL_TEAMS:
            return {
                ...state,
                teamsVector: action.payload
            }
        default:
            return state;
    }
}

export default teamReducer;