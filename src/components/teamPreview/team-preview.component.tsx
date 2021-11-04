import React from 'react'
import { Team } from '../../actions/types'
import styles from './styles.module.css'
import { FaTimes } from 'react-icons/fa'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'


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
        <Col lg={true}>
            <div className={`p3 border border-dark ${styles.div}`}>
                    <h1 data-testid="Nombre" className={`text-black`}>{name}</h1>
                    <Image src={logo} fluid className="w-25" data-testid="Imagen"/>
                    <div className={styles.trash} >
                        <FaTimes onClick={handleDelete} data-testid="DeleteButton"/>
                    </div>
            </div>
        </Col>
    );
}

export default TeamPreview;