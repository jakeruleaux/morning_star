import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components'
import './App.css';

class Splash extends Component {
    constructor(props){
        super(props)
        this.state = {
            backgroundColor: ''
        }
    }
    // <div style={styles.splashContainer} className="spashContainer">
    //             <span className="megrimFont" style={styles.logo}>*</span>
    //         </div>
    render() {

        const background = keyframes`
            from {background-color: red;}
            to {background-color: yellow;}
        `;

        const SplashContainer = styled.div `
                width: 100vw;
                height: 100vh;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                justify-content: center;
                background-color: red;
                font-size: 1000px;
                animation: ${background} 4s;
                font-family: Megrim;
        `;
        
        return(
            <SplashContainer>*</SplashContainer>
        );
    }
}

export default Splash;