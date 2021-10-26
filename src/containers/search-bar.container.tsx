import React from 'react'
import {useState} from 'react'
import SearchBarComponent from '../components/searchBar/search-bar.component'

interface Props {
    onSearchTeam: (name:string) => Promise<void>;
}
const SearchBarContainer: React.FC<Props> = (props) => {
    
    const [search, setSearch] = useState('');

    const {onSearchTeam} = props;

    const handleSubmit = async (name:string) => {
        await onSearchTeam(search);
    }

    return (
        <>
            <SearchBarComponent handleSubmit={handleSubmit} value={search} setValue={setSearch}/>
        </>
    )
}

export default SearchBarContainer;