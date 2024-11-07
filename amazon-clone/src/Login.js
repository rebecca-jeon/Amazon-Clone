import React, {useState} from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';


function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        signInWithEmailAndPassword(auth, email, password)
            .then ((userCredential) => {
                navigate('/');
            })
            .catch((error) => {
                alert(error.message);
            })
        //fancy firebase login
        
    }
    const register = e => {
        e.preventDefault();
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //successfully created a new user with email and password
                navigate('/');
            })
            .catch((error) => {
                alert(error.message);
            })
        //fancy firebase reigster
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value = {email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type = 'submit' onClick={signIn}
                    className='login__signInButton'>Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE
                    Conditions of Use & Sale. Please see our Privacy Notice, 
                    our Cookies Noticeand our Interest-Based Ads Notice
                </p>

                <button onClick={register} className='login__registerButton'>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login;