import React, { Component } from 'react';
// import Firebase from '../configs/index';
import AdminLogin from './AdminLogin';
import firebaseApp from '../configs/index';

class Admin extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log(firebaseApp, firebaseApp.firebase, firebaseApp.app , "things")
    }

    handleAdminLogin = event => {
        // event.preventDefault();
        const firebase = firebaseApp;
        console.log(firebase, 'fb in login', firebaseApp, firebase.firebase_.auth())
        const provider = new firebase.firebase_.auth.GoogleAuthProvider();  
        // debugger;     
        firebase.firebase_.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    };

    render() {
        const firebase = firebaseApp;
        console.log(firebase, 'firebase config context in admin')
        return (
           <div>
               <AdminLogin handleAdminLogin={this.handleAdminLogin} />
           </div>
        );
    }
}

export default Admin;