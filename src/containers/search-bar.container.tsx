import React from 'react'
import {useState} from 'react'
import SearchBarComponent from '../components/searchBar/search-bar.component'
import { useDispatch } from 'react-redux'
import { getTeamByName } from '../actions/teamActions'

const SearchBarContainer: React.FC = () => {
    
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (name:string) => {
        dispatch(getTeamByName(name));
    }

    return (
        <>
            <SearchBarComponent handleSubmit={handleSubmit} value={search} setValue={setSearch}/>
        </>
    )
}

export default SearchBarContainer;