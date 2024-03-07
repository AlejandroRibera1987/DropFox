import React, { createContext, useState } from 'react'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const UserContext = createContext()

export const UserProvider = ({ children }) => {

const login = () => {
    try { 
        await firebase.auth().signInWithEmailAndPassword(email, password); 
    } catch (error) {
        setError(error.message);
      }
};   

    return (
        <UserContext.Provider>
            ({children})
        </UserContext.Provider> 
    )
} 


