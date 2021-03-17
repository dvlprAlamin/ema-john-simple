import React, { createContext, useContext } from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import { useState } from 'react';
import { firebaseConfig } from './firebaseconfig';
import { useHistory, useLocation } from 'react-router';
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const AuthenticationContext = createContext();

export const AuthenticationProvider = (props) => {
    const [loggedUser, setLoggedUser] = useState(false);
    // const history = useHistory();
    // const location = useLocation();

    // const { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const [userauth, setUserauth] = useState({
        isSignIn: false,
        name: '',
        email: '',
        image: ''
    })
    const googleSignInHandler = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const user = result.user;
                setUserauth({
                    isSignIn: true,
                    name: user.displayName,
                    email: '',
                    image: user.photoURL
                });
                // setLoggedUser(true);
            // history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
        // console.log('clicked');
    }
    const signOutHandler = () => {
        firebase.auth().signOut().then(() => {
            console.log('sign out success');
            setUserauth({
                isSignIn: false,
                name: '',
                email: '',
                image: ''
            });
            
        }).catch((error) => {
            // An error happened.
        });
    }

    // facebook sign in 
    const fbSignInHandler = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                const credential = result.credential;
                const user = result.user;
                const accessToken = credential.accessToken;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorMessage);
            });
    }

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const onBlurHandler = (e) => {
        console.log(e.target.value);
        const newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }
    const createUser = (e) => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                var user = userCredential.user;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
        e.preventDefault();
    }
    const logInHandler = (e) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                var user = userCredential.user;
                setLoggedUser(true);
                // history.replace(from);
                console.log(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        e.preventDefault();
    }
    return (
        <AuthenticationContext.Provider value={{googleSignInHandler,fbSignInHandler,loggedUser,setLoggedUser}}>
            {props.children}
        </AuthenticationContext.Provider>
          
    );
};