import React from 'react';

const AdminLogin = (props) => {
    console.log(props, 'props in admin')
    // const firebase = props.fireba;
    // console.log(firebase, 'firebase in login')
    const [isAdmin, setIsAdmin] = React.useState(false);
    // const ui = new firebaseui.auth.AuthUI(props.firebase.auth());

    // const handleAdminLogin = event => {
    //     event.preventDefault();
    //     var provider = new firebase.auth.GoogleAuthProvider();       
    //     firebase.auth().signInWithPopup(provider).then(function(result) {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         var token = result.credential.accessToken;
    //         // The signed-in user info.
    //         var user = result.user;
    //         // ...
    //       }).catch(function(error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // The email of the user's account used.
    //         var email = error.email;
    //         // The firebase.auth.AuthCredential type that was used.
    //         var credential = error.credential;
    //         // ...
    //       });
    //     setIsAdmin(true);
    // };

    return (
        <div>
            <form>
                <button onClick={props.handleAdminLogin}>
                    Here
                </button>
            </form>
        </div>
    );
}

export default AdminLogin;