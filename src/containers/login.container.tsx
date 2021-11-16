import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../components/login/login.component'
import {State} from '../reducers/rootReducer'
import {login} from '../actions/authActions'
import {useHistory} from 'react-router-dom'


const LoginContainer: React.FC = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const msg = useSelector((state:State) => state.auth.msg);
    const error = useSelector((state:State) => state.auth.error);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login(userName,password));        
    }

    return (
        <>
            <Login
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

export default LoginContainer;