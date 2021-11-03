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
        <form id={"formSearch"}onSubmit={onSubmit} data-testid="SearchForm">
            <input 
                type="text"
                name="searchInput"
                data-testid="Input"
                placeholder="Search a team..." 
                className={` ${styles.searchInput}`}
                onChange={(target) => setValue(target.currentTarget.value)}
            />

            <button type="submit" id="submitButton" className={`${styles.searchButton}`} data-testid="Button">
                 Search
            </button>
        </form>  
    )
}

export default SearchBarComponent;