import React from 'react'
import TeamPreview from '../components/teamPreview/team-preview.component'
import { Team } from '../actions/types'
import {deleteTeam} from '../actions/teamActions'
import {useSelector,useDispatch} from 'react-redux';
import {State} from '../reducers/rootReducer'

const TeamPreviewContainer: React.FC = () => {

    const dispatch = useDispatch();
    const teams = useSelector((state: State) => state.teams.teamsVector)

    const handleDelete = async (id: number) => {
        dispatch(deleteTeam(id));
    }
    
    return (
        <>
            {teams.map( (team) => (
                    <TeamPreview key ={team.id} name={team.name}
                    logo={team.logo} id={team.id} onDelete={handleDelete}/> 
            ))}
        </>
    )
}

export default TeamPreviewContainer;