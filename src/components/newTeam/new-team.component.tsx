import React from 'react'
import { newTeam } from '../../actions/types'
import style from './styles.module.css'

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
        <div className={`${style.form} bg-dark`}>
            <form onSubmit={onSubmit}  id="addTeamForm" className={`${style.form} bg-dark`} data-testid="form">

                <h4> Fill the fields </h4>

                <div>
                    <label htmlFor="nombre" className={style.customField}>  
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            data-testid="nameInput"
                            value={name}
                            onChange={(target) => setName(target.currentTarget.value)}
                            className={style.input}
                            required              
                        />
                        <span className={style.placeholder}> Name </span> 
                    </label>
                </div>
                    
                <div>
                    <label htmlFor="wins" className={style.customField}>

                        <input 
                            type="number" 
                            id="wins" 
                            name="wins"
                            data-testid="winsInput"
                            value={wins}
                            onChange={(target) => setWins(target.currentTarget.valueAsNumber)}
                            className={style.input}
                            required
                        />

                        <span className={style.placeholder}>  Wins </span>
                    </label>
                </div>
                
                <div>
                    <label htmlFor="defeats" className={style.customField}>
                        <input 
                            type="number" 
                            id="defeats" 
                            name="defeats"
                            data-testid="defeatsInput"
                            value={losses}
                            onChange={(target) => setLoses(target.currentTarget.valueAsNumber)}
                            className={style.input}
                            required
                        />

                        <span className={style.placeholder}> Defeats </span>
                    </label>
                </div>
                
                <div> 
                    <label htmlFor="draws" className={style.customField}>
                        <input 
                            type="number" 
                            id="draws" 
                            name="draws"
                            data-testid="drawsInput"
                            value={ties}
                            onChange={(target) => setTies(target.currentTarget.valueAsNumber)} 
                            className={style.input}
                            required
                        />

                        <span className={style.placeholder}> Draws </span>
                    </label>
                </div>

                <div>
                    <label htmlFor="gp" className={style.customField}>
                        <input 
                            type="number" 
                            id="gp" 
                            name="gp" 
                            data-testid="gpInput"
                            value={gamesplayed}
                            onChange={(target) => setGamesPlayed(target.currentTarget.valueAsNumber)}
                            className={style.input}
                            required
                        />

                        <span className={style.placeholder}> Games Played </span>
                    </label>
                </div>
                
                <div>
                    <label htmlFor="gf" className={style.customField}>
                        <input 
                            type="number" 
                            id="gf" 
                            name="gf"
                            data-testid="gfInput"
                            value={goalsfor}
                            onChange={(target) => setGoalsFor(target.currentTarget.valueAsNumber)}
                            className={style.input}
                            required
                        />
                        <span className={style.placeholder}> Goals For </span>
                    </label>
                </div>
                
                <div>
                    <label htmlFor="ga" className={style.customField}>
                        <input 
                            type="number" 
                            id="ga" 
                            name="ga"
                            data-testid="gaInput"
                            value={goalsaganist}
                            onChange={(target) => setGoalsAganist(target.currentTarget.valueAsNumber)}
                            className={style.input}
                            required
                        />

                        <span className={style.placeholder}> Goals Aganist </span> 
                    </label>
                </div>
                
                <div>
                    <label htmlFor="points" className={style.customField}>
                        <input 
                            type="number" 
                            id="points" 
                            name="points"
                            data-testid="pointsInput"
                            value={points}
                            onChange={(target) => setPoints(target.currentTarget.valueAsNumber)} 
                            className={style.input}
                            required
                        />

                        <span className={style.placeholder}> Points </span> 
                    </label>
                </div>

                <div>
                    <label htmlFor="rank" className={style.customField}>
                        <input 
                            type="number" 
                            id="rank" 
                            name="rank"
                            data-testid="rankInput"
                            value={rank}
                            onChange={(target) => setRank(target.currentTarget.valueAsNumber)}
                            className={style.input}
                        />
                        <span className={style.placeholder}> Rank </span> 
                    </label>
                </div>

                <div>
                    <label htmlFor="logo" className={style.customField}> 
                        <input 
                            type="url" 
                            id="logo" 
                            name="logo"
                            data-testid="logoInput"
                            value={logo}
                            onChange={(target) => setLogo(target.currentTarget.value)}
                            className={style.input}
                        />
                        
                        <span className={style.placeholder}> Logo </span> 
                    </label>
                </div>

                <button data-testid={"SubmitButton"} type="submit" id="submitButton" className={'btn btn-primary btm-lg btn.success'}>
                    Done
                </button>
                
            </form>
        </div>
    );
}

export default NewTeam;