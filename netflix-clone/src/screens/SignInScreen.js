import React, { useRef } from 'react'
import { auth } from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import './SignInScreen.css'

function SignInScreen() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const register = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const signIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            console.log(error)
        })
        
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signup_screen_grey">New to Netflix? &nbsp;</span>
                    <span className="signup_screen_link" onClick={register}>Sign up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignInScreen;
