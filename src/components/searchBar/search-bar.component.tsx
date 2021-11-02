import React from 'react'
import styles from './styles.module.css'

export interface Props {
    value: string;
    handleSubmit: (name:string) => void;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBarComponent: React.FC<Props> = (props) => {

    const {value, handleSubmit, setValue} = props;
    
    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        handleSubmit(value);
    }

    return (
        <form id={"formSearch"}onSubmit={onSubmit} >
            <input 
                type="text" 
                placeholder="Search a team..." 
                className={` ${styles.searchInput}`}
                onChange={(target) => setValue(target.currentTarget.value)}
                aria-label="Search"
            />

            <button type="submit" id="submitButton" className={`${styles.searchButton}`}>
                 Search
            </button>
        </form>  
    )
}

export default SearchBarComponent;