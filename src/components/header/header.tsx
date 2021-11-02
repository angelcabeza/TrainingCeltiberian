import React from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './styles.module.css'




const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand bg-dark">
                <Link id={"LogoDescription"} to={'/'} className={` text-decoration-none`}>
                    <h2 className={styles.titulo}> FootApp </h2>
                    <h4 className={styles.h4}> Stadistics & more</h4>
                </Link>

            <div  className={`${styles.links}`}>
                <Link data-testid={"Add-Team"} to={'/add'} className={styles.color} >
                    <span className={styles.color}> Add-Team </span>
                </Link>
            </div>
        </nav>
    );
}

export default Header;