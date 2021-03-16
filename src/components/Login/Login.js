import React, { useContext } from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import { useState } from 'react';
import { firebaseConfig } from './firebaseconfig';
import './Login.css'
import { AuthProvider } from '../../App';
import { useHistory, useLocation } from 'react-router';
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const Login = () => {

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedUser, setLoggedUser] = useContext(AuthProvider);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const [userauth, setUserauth] = useState({
        isSignIn: false,
        name: '',
        email: '',
        image: ''
    })
    const signInHandler = () => {
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
                })
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
            })
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
                history.replace(from);
                console.log(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        e.preventDefault();
    }
    return (
        <div align="center">
            <div className="tab-container">
                <ul class="nav nav-tabs tab-items" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Sign up</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Log in</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <form onSubmit={createUser}>
                            <input type="text" onBlur={onBlurHandler} name="name" id="" placeholder="Full name" label="Email" /><br />
                            <input type="email" onBlur={onBlurHandler} name="email" id="" placeholder="Email" label="Email" /><br />
                            <input type="password" onBlur={onBlurHandler} name="password" id="" placeholder="Password" label="password" /><br /><br />
                            <input type="submit" value="sign up" variant="outlined" />
                        </form>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <form onSubmit={logInHandler}>
                            <input type="email" onBlur={onBlurHandler} name="email" id="" placeholder="Email" label="Email" /><br />
                            <input type="password" onBlur={onBlurHandler} name="password" id="" placeholder="Password" label="password" /><br /><br />
                            <input type="submit" value="log in" variant="outlined" />
                        </form>
                    </div>
                </div>
                <div className="mt-5">
                    <h3>or connected with</h3>
                    {userauth.isSignIn ? <button onClick={signOutHandler} variant="contained" color="secondary">Sign out</button> :
                        <button onClick={signInHandler} variant="contained" color="secondary">Google</button>}
                    <button onClick={fbSignInHandler} variant="contained" color="primary">Facebook</button>
                    <br />
                    {userauth.isSignIn && <div>
                        <h1>Welcome {userauth.name}</h1>
                        <img src={userauth.image} alt="" />
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Login;