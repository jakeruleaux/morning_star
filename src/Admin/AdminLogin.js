import React from 'react';
import styled from 'styled-components';

const AdminLogin = (props) => {
    const [isAdmin, setIsAdmin] = React.useState(false);


    const handleAdminLogin = () => {
        // event.preventDefault();
        setIsAdmin(true);
        props.handleAdminLogin();
    };

    const LoginContainer = styled.div `
        height: 100%;
        width: 100%;
        display: flex;
    `;

    const LoginForm = styled.form `
        align-self: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 200px;
        margin-left: 5%;
    `;

    const Logo = styled.span `
        font-family: Megrim;
        font-size: 500px;
    `; 
        
    const LoginTitle = styled.h1 `
        font-family: Megrim;
    `;
    
    const LoginButton = styled.button `
        width: 100px;
        height: 40px;
        color: #FFFFFF;
        background-color: #0000FF;
        font-size: 14px;
    `;

    return (
        <LoginContainer>
            <Logo>*</Logo>
            <LoginForm>
                <LoginTitle>Admin Login</LoginTitle>
                <LoginButton onClick={handleAdminLogin}>
                    Login Boss
                </LoginButton>
            </LoginForm>
        </LoginContainer>
    );
}

export default AdminLogin;