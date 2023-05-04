/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext=createContext(null);
const googleProvider=new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();
const auth=getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

const logOut=()=>{
    return signOut(auth);
}

const googleLogin=()=>{
   return signInWithPopup(auth,googleProvider);
}
const githubLogin=()=>{
    return signInWithPopup(auth,githubProvider);
}

useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
});


return ()=>{
    unsubscribe();
}
},[])


    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        googleLogin,
        githubLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;