import React from 'react'
import { Team } from '../../actions/types'
import styles from './styles.module.css'
import { FaTimes } from 'react-icons/fa'

export interface Props {
    name: string;
    logo: string;
    id: number;
    onDelete: (id: number) => Promise<void>;
}

const TeamPreview: React.FC<Props> = (props) => {

    const { name,logo, onDelete,id } = props;

    const handleDelete = async () => {
        onDelete(id);
    }
    
    return (
        <div>
            <div className={`p-3 mb-2 text-black border border-dark ${styles.div}`}>
                <h1>{name}</h1>
                <img src={logo} className={styles.img}/>
                <div className={styles.trash}>
                    <FaTimes onClick={handleDelete}/>
                </div>
            </div>
        </div>
    );
}

export default TeamPreview;