import React from 'react'
import { useState } from 'react'
import NewTeam from '../components/newTeam/new-team.component'
import { newTeam } from '../actions/types'
import {useHistory} from 'react-router-dom'

interface Props {
    onAddTeam: (team: newTeam) => Promise<void>;
}

const AddTeamContainer: React.FC<Props> = (props) => {
    const [name, setName] = useState('');
    const [rank, setRank] = useState(0);
    const [wins, setWins] = useState(0);
    const [logo, setLogo] = useState('');
    const [losses, setLoses] = useState(0);
    const [ties, setTies] = useState(0);
    const [gamesplayed, setGamesPlayed] = useState(0);
    const [goalsfor, setGoalsFor] = useState(0);
    const [goalsaganist, setGoalsAganist] = useState(0);
    const [points, setPoints] = useState(0)
    const history = useHistory();
    const {onAddTeam} = props;

    const handleSubmit = (team: newTeam) => {
        onAddTeam(team);
        history.push('/')
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