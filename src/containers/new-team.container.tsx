import React from 'react'
import { useState } from 'react'
import NewTeam from '../components/new-team.component'
import { newTeam } from '../actions/types'

interface Props {
    onAddTeam: (team: newTeam) => Promise<void>;
}

const AddTeamContainer: React.FC<Props> = (props) => {
    const [name, setName] = useState('');
    const [rank, setRank] = useState(-1);
    const [wins, setWins] = useState(-1);
    const [logo, setLogo] = useState('');
    const [losses, setLoses] = useState(-1);
    const [ties, setTies] = useState(-1);
    const [gamesplayed, setGamesPlayed] = useState(-1);
    const [goalsfor, setGoalsFor] = useState(-1);
    const [goalsaganist, setGoalsAganist] = useState(-1);
    const [points, setPoints] = useState(-1)

    const {onAddTeam} = props;

    const handleSubmit = (team: newTeam) => {
        onAddTeam(team);
    };

    return (
        <>
            <NewTeam
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                rank={rank}
                setRank={setRank}
                logo={logo}
                setLogo={setLogo}
                wins={wins}
                setWins={setWins}
                losses={losses}
                setLoses={setLoses}
                ties={ties}
                setTies={setTies}
                gamesplayed={gamesplayed}
                setGamesPlayed={setGamesPlayed}
                goalsfor={goalsfor}
                setGoalsFor={setGoalsFor}
                goalsaganist={goalsaganist}
                setGoalsAganist={setGoalsAganist}
                points={points}
                setPoints={setPoints}
            />
        </>
    )
}

export default AddTeamContainer;