import { Action, ActionTypes, State } from '../actions/types'

const initialState: State = {
    teams: [],
    prueba: true
};

const teamReducer = (state: State = initialState, action: Action) => {
    
    switch (action.type) {
        case ActionTypes.CREATE_TEAM:
            return [...state.teams,action.payload];

        case ActionTypes.DELETE_ALL_TEAMS:
            return [];
        
        case ActionTypes.DELETE_TEAM:
            return state.teams.filter(({id}) => id !== action.payload);

        case ActionTypes.GET_ALL_TEAMS:
            return [...state.teams, action.payload];
        
        case ActionTypes.GET_TEAM:
            return state.teams.map(({id}) => id === action.payload.id);

        case ActionTypes.UPDATE_TEAM:
            return [...state.teams.map((ele) => 
                    ele.id === action.payload.id ? action.payload : ele
                )
            ];

        default:
            return state;
    }
}

export default teamReducer;