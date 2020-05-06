import React, { Component } from 'react';
// import Firebase from '../configs/index';
import AdminLogin from './AdminLogin';
import firebaseApp from '../configs/index';

class Admin extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAdmin: false
        }
    }

    handleAdminLogin = () => {
        const firebase = firebaseApp;
        const provider = new firebase.firebase_.auth.GoogleAuthProvider();     
        firebase.firebase_.auth().signInWithPopup(provider).then(function(result) {
            // const  token = result.credential.accessToken;
            const user = result.user;
          })
          .then(user => {
            // filter emails to prevent unauthorized login
            console.log(user, '?')
            if(user.email === 'jakeruleaux@gmail.com') {
                this.setState({ isAdmin: true });
                console.log(user, 'user', user.email, this.state.isAdmin)
            }
          })
          .catch(function(error) {
            const errorCode = error.code;
          });
    };

    render() {
        // const firebase = firebaseApp;
        console.log(this.state.isAdmin, 'admin in render')
        return (
           <div>
               <AdminLogin handleAdminLogin={this.handleAdminLogin} />
           </div>
        );
    }
}

export default Admin;