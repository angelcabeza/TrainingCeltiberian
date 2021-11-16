import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Register from '../components/register/register.component'
import {State} from '../reducers/rootReducer'
import {register} from '../actions/authActions'
import {useHistory} from 'react-router-dom'


const RegisterContainer: React.FC = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const error = useSelector((state:State) => state.auth.error);
    const msg = useSelector((state:State) => state.auth.msg);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(register(userName,password));        
    }

    return (
        <>
            <Register
                username={userName}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                error={error}
                msg={msg}
            />
        </>
    )
}

export default RegisterContainer;