import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
const LoginPopup = ({ setShowLogin }) => {

    const {url,setToken} = useContext(StoreContext)

    const [currentState, setCurrentState] = useState('Login')
    const [data, setData] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleOnChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setData(data=>({...data,[name]:value}))
    }

    const onLogin =async (e) =>{
        e.preventDefault()
        let newUrl = url
        if(currentState==='Login'){
            newUrl +='/api/user/login'
        }else{
            newUrl += '/api/user/register'
        }
        const response = await axios.post(newUrl,data)
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
            setShowLogin(false)
        }else{
            alert(response.data.message)
        }
    }

    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={onLogin}>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState == 'Login' ? <></> :
                        <input type='text' placeholder='Your name' name='name' value={data.name} onChange={handleOnChange} required />
                    }
                    <input type="email" name='email' value={data.email} onChange={handleOnChange} placeholder='Your email' required />
                    <input type="password" name='password' value={data.password} onChange={handleOnChange} placeholder='Password' required />
                </div>

                <button>{currentState == "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privecy policy.</p>
                </div>
                {currentState == "Login" ?
                    <p>Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span></p> :
                    <p>Already have an account ? <span onClick={() => setCurrentState('Login')}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
