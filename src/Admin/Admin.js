import React, { Component } from 'react';
import Firebase, { FirebaseContext } from '../configs/index';
import AdminLogin from './AdminLogin';
import FirebaseConfig from '../configs/index';

class Admin extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const firebase = FirebaseConfig;
        console.log(firebase, 'firebase config context in admin', FirebaseContext)
        return (
           <div>
               <AdminLogin firebase={firebase} />
           </div>
        );
    }
}

export default Admin;