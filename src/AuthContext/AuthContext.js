import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';


export const AuthContextProvider = createContext();
const auth = getAuth(app)
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);

    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        setLoading(true)
       return signOut(auth);
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    }
    const updateUserProfile = (updateInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateInfo);
    }
    const forgetpassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return()=> {
            unsubscribe();
        }
    }, [])


    const AuthInfo = {user,createUser,signin,logout,googleLogin,updateUserProfile,forgetpassword,loading}

    return (
        <AuthContextProvider.Provider value={AuthInfo}>
            {children}
        </AuthContextProvider.Provider>
    );
};

export default AuthContext;