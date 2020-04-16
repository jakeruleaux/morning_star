import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components'
import './App.css';

const backgroundColorArray = [
    "#FF33FC",
    "#33FFFF",
    "#75FF33",
    "#000000",
    "#33A2FF",
    "FF3333",
    "#33FF42",
    "#6833FF",
    "#FF9933",
    "#FFFFFF"
]

const fontColorArray = [
    "#FFFFFF",
    "#5e106d",
    "#00ffff",
    "#bf260a",
    "#66ff66",
    "#0033cc",
    "#ffff00",
    "#ff66ff",
    "#00ccff",
    "#000000"
]

class Splash extends Component {
    constructor(props){
        super(props)
        this.state = {
            backgroundColor: '',
            fontColor: '',
            isRendered: false
        }
    }
    
    componentDidMount() {
        let colorPos = 0;
        const interval = setInterval(() => {
            if(backgroundColorArray.length - 1 > colorPos) {
                this.setState({
                    backgroundColor : backgroundColorArray[colorPos],
                    fontColor : fontColorArray[colorPos]
                });
                colorPos++;
            } else {
                this.setState({
                    backgroundColor : backgroundColorArray[colorPos],
                    fontColor : fontColorArray[colorPos]
                });
                colorPos = 0;
            }
        }, 100);

        setTimeout(()=> {
            clearInterval(interval);
            this.setState({ isRendered: true })
        }, 1000);
    
    }
    
    render() {
        const isRendered = this.state.isRendered;
        const backgroundColor = this.state.backgroundColor;
        const fontColor = this.state.fontColor;
    
        const fadeIn = keyframes `
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
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
                background-color: ${backgroundColor};
                color: ${fontColor};
                font-family: Megrim;
                transition: all 1500ms ease;
        `;

        const TitleText = styled.div `
            animation-name: ${fadeIn};
            animation-duration: 4s;
            font-size: 90px;
            font-family: Megrim;
            align-self: flex-end;
            margin-bottom: 180px;
            &:after {
                content: '';
                background: radial-gradient(rgba(83, 108, 117, 0.2) 0%, transparent 70%);
                width: 600px;
                height 100px;
                position: absolute;
                bottom: 75px;
                left: 450px;
            }
        `;

        const Logo = styled.span `
            font-family: Megrim;
            font-size: 1000px;
            &:after {
                content: '';
                background: radial-gradient(rgba(83, 108, 117, 0.2) 0%, transparent 70%);
                width: 600px;
                height 100px;
                position: absolute;
                bottom: 75px;
                left: 75px;
            }
        `;
        
        return(
            <SplashContainer>
                <Logo>*</Logo>
                <TitleText>morningStar</TitleText>
            </SplashContainer>
        );
    }
}

export default Splash;