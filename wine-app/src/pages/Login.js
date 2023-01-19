import React, {useState} from "react";
import "./Login.css"

export const Login = ({getLogin}) =>{

    const [loginName, setLoginName] = useState("")
    const [password, setPassword] = useState("")
    const [loginInvalid, setLoginInvalid] = useState(false)


    const submitHandler = e => {
        e.preventDefault()
        if(loginName.length === 0){
            setLoginInvalid(true)
        }
        if(loginName.length >0 && password.length >0){
        getLogin(loginName)
        setLoginName("")
        setPassword("")
        }

    }


    const handleChangeLogin = e =>{
        setLoginName(e.target.value)



    }

    const handleChangePassword = e =>{
        setPassword(e.target.value)

    }



    return <div className="login-screen">
        <div className="login-title">Welcome to the Wine App!</div>
        <form onSubmit={submitHandler} className="login-form">
            <input className="login-form-input"
                   value={loginName}
                   type="text"
                   placeholder="Enter your login"
                   onChange={handleChangeLogin}
                   name="login"/>
            {loginInvalid ? <div className="login-validator">Login is too short.</div>: null}
            <input className="login-form-input"
                   value={password}
                   type="password"
                   placeholder="Enter your password"
                   onChange={handleChangePassword}
                   />
            <button type="submit"
                    className="login-form-button">Let's start!</button>

        </form>
    </div>

}