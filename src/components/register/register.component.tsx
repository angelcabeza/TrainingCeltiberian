import React from 'react'
import style from './styles.module.css'

interface Props {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
    msg: string;
    error: boolean;
}

const Register: React.FC<Props> = (props) => {
    const {username, setUsername, password,setPassword, handleSubmit, msg, error} = props;
    return (
        <div className={`${style.form} bg-dark`}>
            <form onSubmit={handleSubmit} className={`${style.form} form`}>
                {error ? (
                    <div
                      className="alert alert-danger text-center text-capitalize"
                      role="alert"
                    >
                      {msg}
                    </div>
                ) : null}
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="userfield">Username</label>
                    <input type="text" id="userfield" className="form-control form-control-lg" placeholder="Username..." onChange={(target) => setUsername(target.currentTarget.value)}/>
                </div>

                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="passwordfield">Password</label>
                    <input type="password" id="passwordfield" className="form-control form-control-lg" placeholder="Enter password" onChange={(target) => setPassword(target.currentTarget.value)} />
                </div>

                <div>
                    <button type="submit" className="btn btn.primary btn-light">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;