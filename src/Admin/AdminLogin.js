import React from 'react';

const AdminLogin = (props) => {
    console.log(props, 'props in admin')
    const [isAdmin, setIsAdmin] = React.useState(false);

    const handleAdminLogin = event => {
        const firebase = props.firebase;
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword;
        setIsAdmin(true);
    };

    return (
        <div>
            <form>
                <button type="submit" onClick={handleAdminLogin}>
                    Here
                </button>
            </form>
        </div>
    );
}

export default AdminLogin;