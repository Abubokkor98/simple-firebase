import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import auth from '../Firebase/firebase.init';

export default function Login() {
    // state for display user
    const [user, setUser] = useState(null);

    const googleProvide = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvide)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error=>{
            console.log("Error khaisi mama", error);
        })
    };

    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser(null)
        })
        .catch(error=>console.log(error))
    }
  return (  
    <div>
        
        
        {
            user ? <button onClick={handleSignOut}>SignOut</button> : <button onClick={handleGoogleSignIn}>Login with Google</button>
        }
        {
            user && <div>
                <h2>Name: {user.displayName}</h2>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
        }
    </div>
  )
}
