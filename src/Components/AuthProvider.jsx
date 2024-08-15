// import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import auth from "../Firebase/firebase.config";
// import PropTypes from 'prop-types';
// import { GoogleAuthProvider } from "firebase/auth";
// import axios from "axios";
// import { data } from "autoprefixer";

import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import axios from "axios";
import PropTypes from 'prop-types'; // ES6

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loggedInUser, setLoggedInUser] = useState(null); 

    const [loading , setLoading] = useState(true);

    // create user 
    const createUser = (email, password, name )=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password ,  name)
    }

    // sign in user / login user 
    const signInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login 
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider); // auth নিশ্চিত করুন সঠিকভাবে কনফিগার করা হয়েছে কিনা
    };

    // github login 
    const githubLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, new GithubAuthProvider());
    }

    // logOut 
    const logOut = ()=>{
        setLoading(true)
        setUser(null)
        setLoggedInUser(null); // Reset loggedInUser state
        return signOut(auth)
    }

    // Set loggedInUser when user logs in
    useEffect(() => {
        if (user) {
            setLoggedInUser(user);
        } else {
            setLoggedInUser(null);
        }
    }, [user]);

    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser);
            setLoading(false);
            // use exists then issue a token 
            if(currentUser){
                
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post(`${import.meta.env.VITE_API_URL}/logOut`,loggedUser, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data)
                })
            }
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user,
        loggedInUser, 
        loading,
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node.isRequired
}

export default AuthProvider;