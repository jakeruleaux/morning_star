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
            const user = result.user;
            return user;
          })
          .then(user => {
            // filter emails to prevent unauthorized login
            if(user.email === 'jakeruleaux@gmail.com' || user.email === 'themorningstarbus@gmail.com') {
                this.setState({ isAdmin: true });
            } else {
                ///error
            }
          })
          .catch(function(error) {
            const errorCode = error.code;
          });
    };

    render() {
        return (
           <div>
               <AdminLogin handleAdminLogin={this.handleAdminLogin} />
           </div>
        );
    }
}

export default Admin;