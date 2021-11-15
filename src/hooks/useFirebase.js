import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthenticaition from '../Pages/Login/Firebase/firebase.init';

initializeAuthenticaition();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return {
        user,
        error,
        registerUser,

    };
};

export default useFirebase;