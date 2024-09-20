import React, { useState } from "react";
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';

import { auth } from '../../firebase';
import { error } from "console";

import './styles.css'
const Login = () => {

    const [user, setUSer] = useState<User>({} as User);


    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {

                setUSer(result.user);
            })
            .catch((error) => {
                console.log(error);

            })
    }

    return (
        <div>
            <div className="user">
                {user.photoURL && <img src={user.photoURL} alt="user" />}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>

            <div className="googleSignIn">
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
        </div>
    )
}

export default Login;