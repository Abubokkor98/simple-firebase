import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react'

export default function Login() {

    const googleProvide = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('google is coming');
    }
  return (  
    <div>
        <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  )
}
