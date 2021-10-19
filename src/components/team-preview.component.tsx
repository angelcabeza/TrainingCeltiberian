import React from 'react'
import { Team } from '../actions/types'

export interface Props {
    name: string;
    logo: string;
}

const TeamPreview: React.FC<Props> = (props) => {

    const { name,logo } = props;
    return (
        <div>
            <div>
                <h1>{name}</h1>
                <img src={logo}/>
            </div>
        </div>
    );
}

export default TeamPreview;