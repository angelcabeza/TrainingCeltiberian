import React from 'react'
import { newTeam } from '../actions/types'

export interface Props {
    handleSubmit: (team: newTeam) => void;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>
    logo: string;
    setLogo: React.Dispatch<React.SetStateAction<string>>
    rank: number;
    setRank: React.Dispatch<React.SetStateAction<number>>
    wins: number;
    setWins: React.Dispatch<React.SetStateAction<number>>
    losses: number;
    setLoses: React.Dispatch<React.SetStateAction<number>>
    ties: number;
    setTies: React.Dispatch<React.SetStateAction<number>>
    gamesplayed: number,
    setGamesPlayed: React.Dispatch<React.SetStateAction<number>>
    goalsfor: number;
    setGoalsFor: React.Dispatch<React.SetStateAction<number>>
    goalsaganist: number;
    setGoalsAganist: React.Dispatch<React.SetStateAction<number>>
    points: number;
    setPoints: React.Dispatch<React.SetStateAction<number>>

}

const NewTeam: React.FC<Props> = (props) => {

    const {
        name,
        setName,
        logo,
        setLogo,
        rank,
        setRank,
        wins,
        setWins,
        losses,
        setLoses,
        ties,
        setTies,
        gamesplayed,
        setGamesPlayed,
        goalsfor,
        setGoalsFor,
        goalsaganist,
        setGoalsAganist,
        points,
        setPoints,
        handleSubmit
     } = props;

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        handleSubmit({
            name: name,
            logo: logo,
            rank: rank,
            wins: wins,
            losses: losses,
            ties: ties,
            gamesplayed: gamesplayed,
            goalsfor: goalsfor,
            goalsaganist: goalsaganist,
            points: points
        })
    }
    return (
        <form onSubmit={onSubmit} id="addTeamForm">

            <h1> Añade los datos del nuevo equipo </h1>

            <div>
                <label htmlFor="nombre"> <p> Name </p> </label> 
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={name}
                    onChange={(target) => setName(target.currentTarget.value)}
                    required              
                />
            </div>
                
            <div>
                <label htmlFor="wins"><p>  Wins </p> </label>
                <input 
                    type="number" 
                    id="wins" 
                    name="wins"
                    value={wins}
                    onChange={(target) => setWins(target.currentTarget.valueAsNumber)} 
                    required
                />
            </div>
            
            <div>
                <label htmlFor="defeats"> <p> Defeats </p> </label>
                <input 
                    type="number" 
                    id="defeats" 
                    name="defeats"
                    value={losses}
                    onChange={(target) => setLoses(target.currentTarget.valueAsNumber)}
                    required
                />
            </div>
            
            <div> 
                <label htmlFor="draws"> <p> Draws </p> </label>
                <input 
                    type="number" 
                    id="draws" 
                    name="draws"
                    value={ties}
                    onChange={(target) => setTies(target.currentTarget.valueAsNumber)} 
                    required
                />
            </div>

            <div>
                <label htmlFor="gp"> <p> Games Played </p> </label>
                <input 
                    type="number" 
                    id="gp" 
                    name="gp" 
                    value={gamesplayed}
                    onChange={(target) => setGamesPlayed(target.currentTarget.valueAsNumber)}
                    required
                />
            </div>
            
            <div>
                <label htmlFor="gf"> <p> Goals For </p> </label>
                <input 
                    type="number" 
                    id="gf" 
                    name="gf"
                    value={goalsfor}
                    onChange={(target) => setGoalsFor(target.currentTarget.valueAsNumber)}
                    required
                />
            </div>
            
            <div>
                <label htmlFor="ga"> <p> Goals Aganist </p> </label>
                <input 
                    type="number" 
                    id="ga" 
                    name="ga"
                    value={goalsaganist}
                    onChange={(target) => setGoalsAganist(target.currentTarget.valueAsNumber)}
                    required
                />
            </div>
            
            <div>
                <label htmlFor="points"> <p> Points </p> </label>
                <input 
                    type="number" 
                    id="points" 
                    name="points"
                    value={points}
                    onChange={(target) => setPoints(target.currentTarget.valueAsNumber)} 
                    required
                /> 
            </div>

            <div>
                <label htmlFor="rank"> Rank </label>
                <input 
                    type="number" 
                    id="rank" 
                    name="rank"
                    value={rank}
                    onChange={(target) => setRank(target.currentTarget.valueAsNumber)}
                />
            </div>

            <div>
                <label htmlFor="logo"> Logo </label>
                <input 
                    type="url" 
                    id="logo" 
                    name="logo"
                    value={logo}
                    onChange={(target) => setLogo(target.currentTarget.value)}
                />
            </div>

            <button type="submit" id="submitButton">
                Done
            </button>
            
        </form>
    );
}

export default NewTeam;