import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { useContext, useEffect, useState } from 'react';
import '../../firebaseNew.js';

// ** Context created 
const AuthContextNew = React.createContext();

// ** AuthContext.Consumer 

export function useAuth(){

    return useContext(AuthContextNew);
}

// ** AuthContext.Provider

export function AuthProvider({children}){

    const [loading,setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const auth = getAuth();
        const unsubcribe = onAuthStateChanged(auth,(user)=>{
            setLoading(false);
            setCurrentUser(user);
        });

        return unsubcribe;

    }, [])

    // ** signup function
    
    async function signup(email, password, username){
        // ** User created on the firebase account
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth,email, password);

        // **user created update profile 
        await updateProfile(auth.currentUser,{
            displayName: username
        });

        // ** get that user from firebase and store it to local storage

        const user = auth.currentUser;

        setCurrentUser({
            ...user,
        });

    }

    // ** Login function

    function login(email, password){
        const auth = getAuth();
        return signInWithEmailAndPassword(auth);
    }

    // ** Logout function

    function logout(){
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        signup,
        login, 
        logout, 
        currentUser
    }

    return(
        <AuthContextNew.Provider value={value}>
            {!loading && children}
        </AuthContextNew.Provider>
    )
}