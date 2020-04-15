import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components'
import './App.css';

const colorArray = [
    "pink",
    "blue",
    "yellow",
    "green",
    "red",
    "white"
]

class Splash extends Component {
    constructor(props){
        super(props)
        this.state = {
            backgroundColor: 'salmon'
        }
    }
    
    componentDidMount() {
        console.log(colorArray, 'colorArr')
        let colorPos = 0;
        let runTime = 0;
        const interval = setInterval(() => {
            if(colorArray.length - 1 > colorPos) {
                this.setState({
                    backgroundColor : colorArray[colorPos]
                });
                colorPos++;
            } else {
                this.setState({
                    backgroundColor : colorArray[colorPos]
                });
                colorPos = 0;
            }
        }, 100);
        setTimeout(()=> {
            clearInterval(interval);
        }, 600)
    
    }
    
    render() {

        const backgroundColor = this.state.backgroundColor;
        console.log(backgroundColor, this.state.backgroundColor, 'bc in render')

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
                background-color: ${backgroundColor};
                font-family: Megrim;
                transition: all 1500ms ease;
        `;
        
        return(
            <SplashContainer>*</SplashContainer>
        );
    }
}

export default Splash;