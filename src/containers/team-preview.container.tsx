import React from 'react'
import TeamPreview from '../components/teamPreview/team-preview.component'
import { Team } from '../actions/types'
import {deleteTeam} from '../actions/teamActions'
import {useSelector,useDispatch} from 'react-redux';
import {State} from '../reducers/rootReducer'
import {ObjectId} from 'bson'

const TeamPreviewContainer: React.FC = () => {

    const dispatch = useDispatch();
    const teams = useSelector((state: State) => state.teams.teamsVector)

    console.log(teams);
    const handleDelete = async (id: ObjectId) => {
        console.log(id);
        dispatch(deleteTeam(id));
    }
    
    return (
        <>
            {teams.map( (team) => (
                    <TeamPreview key={team.name} name={team.name}
                    logo={team.logo} _id={team._id} onDelete={handleDelete}/> 
            ))}
        </>
    )
}

export default TeamPreviewContainer;