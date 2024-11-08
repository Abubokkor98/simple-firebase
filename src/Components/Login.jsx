import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import auth from '../Firebase/firebase.init';

export default function Login() {

    const googleProvide = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvide)
        .then((result)=>{
            console.log(result);
        })
        .catch(error=>{
            console.log("Error khaisi mama", error);
        })
    }
  return (  
    <div>
        <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  )
}
