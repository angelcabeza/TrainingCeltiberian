import React from 'react'
import { Team } from '../../actions/types'
import styles from './styles.module.css'

export interface Props {
    name: string;
    logo: string;
}

const TeamPreview: React.FC<Props> = (props) => {

    const { name,logo } = props;
    return (
        <div>
            <div className={`p-3 mb-2 text-black border border-dark ${styles.div} trash-can`}>
                <h1>{name}</h1>
                <img src={logo} className={styles.img}/>
            </div>
        </div>
    );
}

export default TeamPreview;