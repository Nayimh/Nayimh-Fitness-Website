import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

import initializeAuthentication from "../Firebase/firebaseInit";

initializeAuthentication();

const useFirebase = () => {
    // google signIn
    const [user, setUser] = useState({});

    const [error, setError] = useState('');
// Reg using email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    // register
    const handleEmail = (e) => {
        setEmail(e.target.value);
        
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        
    }

  
    const handleRegister = (e) => {
        
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                
                const user = result.user;
                setUser(user)
                    
                handleEmail('')
                handlePassword('')
            })
            .catch(error =>{
            setError(error?.message)
            })
            
            e.preventDefault();
    }

    // login
    const handleLoginemail = (e) => {
        setUser(e.target.value)
    }

    const handleLoginPassword = (e) => {
        setUser(e.target.value)
    }

    const handleLogin = (e) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
            setUser(result.user)
            })
            .catch(error => {
            setError(error?.message)
            })
        e.preventDefault()
    }


    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
      return  signInWithPopup(auth, googleProvider)
            
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);


    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        handleEmail,
        handlePassword,
        handleRegister,
        email,
        password,
        handleLogin,
        handleLoginemail,
        handleLoginPassword
    }

}

export default useFirebase;