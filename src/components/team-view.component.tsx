import React from 'react'
import { Team } from '../actions/types'

export interface Props {
    team: Team;
}
const TeamView: React.FC<Props> = (props) => {
    const { team } = props;

    return (
        <div>
            <h1>{team.rank}</h1>
            <img src={team.logo}/>
            <h1>{team.name}</h1>
            <h3>{team.gamesplayed}</h3>
            <h3>{team.wins}</h3>
            <h3>{team.ties}</h3>
            <h3>{team.losses}</h3>
            <h3>{team.goalsfor}</h3>
            <h3>{team.goalsaganist}</h3>
            <h2>{team.points}</h2>
        </div>
    )
}

export default TeamView 