import React from 'react'
import TeamPreview from '../components/teamPreview/team-preview.component'
import { Team } from '../actions/types'

interface Props {
    teams: Team[];
}

const TeamPreviewContainer: React.FC<Props> = (props) => {

    const {teams} = props;

    return (
        <>
            {teams.map( (team) => (
                <TeamPreview key ={team.name} name={team.name} logo={team.logo} />
            ))}
        </>
    )
}

export default TeamPreviewContainer;