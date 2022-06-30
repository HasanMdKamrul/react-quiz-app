import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { useContext, useEffect, useState } from 'react';
import '../../firebase.js';

// ** AuthContext

const AuthContext = React.createContext();

// ** AutheContext.consumer

export function useAuth(){

    return useContext(AuthContext);
}

// ** AutheContext.provider

export function AuthProvider({children}){

    const [loading, setLoading] = useState(true);
    const [currentUser,setCurrentUser] = useState();

    useEffect(()=>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            setLoading(false);

        });

        return unsubscribe;

    },[]);


    // **Signup
    async function signup(email, password, username){
        const auth = getAuth();
        // ** User Profile Create 
        await createUserWithEmailAndPassword(auth, email, password);
        // ** updated the user after the create and login and attached the displayname
        await updateProfile(auth.currentUser,{
            displayName : username,
        });

        const user = auth.currentUser;

        setCurrentUser({
            ...user
        });

    }
    // ** Login 

    function login(email, password){
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    // ** Logout 

    function logout(){
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}