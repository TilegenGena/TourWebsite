import React, { useEffect, useReducer } from 'react';
import {GoogleAuthProvider, onAuthStateChanged,signInWithPopup, signOut } from 'firebase/auth'
import {auth} from '../firebase'

export const AuthContext = React.createContext();

const INIT_STATE ={
    user: null,
}

const reducer = (state, action) => {
    switch (action.type){
        case "CHECK_USER":
            return {...state, user: action.payload}
        default:
            return state;
    }
}

const AuthProvider = (props) => {
    const [state, dispatch] = useReducer( reducer, INIT_STATE)
    
    //! Auth w google 
    const googleProvider = new GoogleAuthProvider()

    const authWithGoogle = async () =>{
        try{
            const response = await signInWithPopup(auth, googleProvider)
            console.log(response);
        }catch (error){
            console.log(error);
        }
    }
// ! check user LOGINED
    const checkUser = () =>{
        onAuthStateChanged(auth, (user)=>{
            let action ={
                type: "CHECK_USER",
                payload: user,
            }
            dispatch(action)
        })
    };

    useEffect(() =>{
        checkUser();
    }, [])

    //! login with Facebook 

    // const facebookProvider = new FacebookAuthProvider();
    
    // const authWithFacebook= async () =>{
    //     try {
    //         const reponse = await singInWithPopup(auth, facebookProvider)
    //         console.log(reponse);
    //     } catch (error){
    //         console.log(error);
    //     }
    // }


    //! user LOGOUT 
    const logout = async () => {
        try{
            await signOut (auth)
        }catch (error){
            console.log(error);
        }
    }

    return <AuthContext.Provider
    value={{
        user: state.user,
        authWithGoogle,
        logout,
    }}
    >
        {props.children}
    </AuthContext.Provider>
       
};

export default AuthProvider;