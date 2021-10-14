import React from 'react'
import { newTeam } from '../actions/types'

export interface Props {
    team: newTeam;
}

const NewTeam: React.FC<Props> = (props) => {

    const { team } = props;

    return (
        <form>

            <h1> Añade los datos del nuevo equipo </h1>

            <div>
                <label htmlFor="nombre"> <p> Name </p> </label> 
                <input type="text" id="nombre" name="nombre" required/>
            </div>
                
            <div>
                <label htmlFor="winns"><p>  Wins </p> </label>
                <input type="number" id="wins" name="wins" required/>
            </div>
            
            <div>
                <label htmlFor="defeats"> <p> Defeats </p> </label>
                <input type="number" id="defeats" name="defeats" required/>
            </div>
            
            <div> 
                <label htmlFor="draws"> <p> Draws </p> </label>
                <input type="number" id="draws" name="draws" required/>
            </div>

            <div>
                <label htmlFor="gp"> <p> Games Played </p> </label>
                <input type="number" id="gp" name="gp" required/>
            </div>
            
            <div>
                <label htmlFor="gf"> <p> Goals For </p> </label>
                <input type="number" id="gf" name="gf" required/>
            </div>
            
            <div>
                <label htmlFor="ga"> <p> Goals Aganist </p> </label>
                <input type="number" id="ga" name="ga" required/>
            </div>
            
            <div>
                <label htmlFor="points"> <p> Points </p> </label>
                <input type="number" id="points" name="points" required/> 
            </div>

            <div>
                <label htmlFor="logo"> Logo </label>
                <input type="url" id="logo" name="logo" required/>
            </div>

            <button type="submit" id="submitButton">
                Done
            </button>
            
        </form>
    );
}

export default NewTeam;