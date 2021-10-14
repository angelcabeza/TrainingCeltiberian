import React from 'react'
import { Team } from '../actions/types'

export interface Props {
    team: Team;
}

const TeamPreview: React.FC<Props> = (props) => {

    const { team } = props;
    return (
        <h1> TEAM PREVIEW</h1>
    )
}

export default TeamPreview;