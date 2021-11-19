import { useEffect, useState } from "react";
import initializeAuthenticaition from '../Pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

initializeAuthenticaition();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();


    // observer user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth])


    //register user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {

                });
                history.replace('/')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //user sign in
    const loginUser = (email, password, history, location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //user log out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(() => setIsLoading(false));
    }


    //save user in database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://secret-everglades-74123.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }

    //set admin state
    useEffect(() => {
        fetch(`https://secret-everglades-74123.herokuapp.com/users/${user.email}`)

            .then(res => res.json())
            .then(data => {

                setAdmin(data.admin)
            })

    }, [user.email])

    return {
        user,
        admin,
        error,
        isLoading,
        loginUser,
        registerUser,
        logOut

    };
};

export default useFirebase;