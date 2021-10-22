import React from 'react'
import TeamPreview from '../components/teamPreview/team-preview.component'
import { Team } from '../actions/types'

interface Props {
    teams: Team[];
    onDelete: (id:number) => Promise<void>;
}

const TeamPreviewContainer: React.FC<Props> = (props) => {

    const {teams, onDelete} = props;

    const handleDelete = async(id:number) => {
        await onDelete(id);
    }

    console.log(teams);
    
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