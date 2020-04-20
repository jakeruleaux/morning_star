import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components'
import './App.css';
import Earth from './Images/earth.jpeg';
import Sunset from './Images/sunset.jpeg';
import Hylite from './Images/hylite.jpg';

const backgroundColorArray = [
    "#FF33FC",
    "#33FFFF",
    "#75FF33",
    `url(${Earth})`,
    "#000000",
    "#33A2FF",
    "FF3333",
    `url(${Hylite})`,
    "#33FF42",
    "#6833FF",
    "#FF9933",
    `url(${Sunset})`,
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
    "#33FF42",
    "FF3333",
    "#33FFFF",
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
        let colorIndex = 0;
        const interval = setInterval(() => {
            if(backgroundColorArray.length -1 > colorIndex) {
                this.setState({
                    backgroundColor : backgroundColorArray[colorIndex],
                    fontColor : fontColorArray[colorIndex]
                });
                colorIndex++;
            } else {
                this.setState({
                    backgroundColor : backgroundColorArray[colorIndex],
                    fontColor : fontColorArray[colorIndex]
                });
                colorIndex = 0;
            }
        }, 100);

        setTimeout(()=> {
            clearInterval(interval);
            this.setState({ isRendered: true })
        }, 1300);
    
    }
    
    render() {
        const isRendered = this.state.isRendered;
        const backgroundColor = this.state.backgroundColor;
        const fontColor = this.state.fontColor;

        const slide = keyframes `
        
            from {
                margin-left: 500px;
            }
        `;
    
        const fadeIn = keyframes `
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        `;
        // Prevent slide animation on mobile
        const mobile = keyframes `
            from {}
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
            background: ${backgroundColor};
            color: ${fontColor};
            font-family: Megrim;
            transition: all 1500ms ease;
            background-repeat: no-repeat;
            background-size: cover;
            overflow-Y: hidden;
            @media only screen and (max-width: 1024px) {
                flex-direction: column;
                align-items: center;
            }
        `;

        const TitleText = styled.div `
            animation-name: ${fadeIn};
            animation-duration: 4s;
            transition-timing-function: ease-out;
            font-size: 90px;
            font-family: Megrim;
            align-self: flex-end;
            margin-bottom: 180px;
            &:after {
                animation-name: ${slide};
                animation-duration: 5s;
                transition-delay: 1s;
                content: '';
                background: radial-gradient(rgba(83, 108, 117, 0.2) 0%, transparent 70%);
                width: 650px;
                height 100px;
                position: absolute;
                bottom: 75px;
                left: 550px;
            }
            @media only screen and (max-width: 1366px) and (max-height: 1024px) {
                &:after {
                    animation-name: ${mobile};
                    content: none;
            }
            @media only screen and (max-width: 1024px) {
                align-self: center;
                &:after {
                    animation-name: ${mobile};
                    content: none;
                    width: 650px;
                    height 100px;
                    position: absolute;
                    bottom: 300px;
                    left: 150px;
                } 
            }
            @media only screen and (max-width: 414px) {
                font-size: 60px;
                &:after {
                    content: none;
                }
            }
            @media only screen and (max-height: 414px) and (orientation: landscape) {
                font-size: 60px;
                margin-top: 45px;
                &:after {
                    content: none;
                }
            }
        `;

        const Logo = styled.span `
            animation-name: ${slide};
            animation-duration: 5s;
            transition-delay: 1s;
            transition-timing-function: ease;
            font-family: Megrim;
            font-size: 1000px;
            &:after {
                animation-name: ${slide};
                animation-duration: 5s;
                transition-delay: 1s;
                content: '';
                background: radial-gradient(rgba(83, 108, 117, 0.2) 0%, transparent 70%);
                width: 650px;
                height 100px;
                position: absolute;
                bottom: 75px;
                left: 150px;
            }
            @media only screen and (max-width: 1366px) and (max-height: 1024px) {
                &:after {
                    animation-name: ${mobile};
                    content: none;
            }

            @media only screen and (max-width: 1024px) {
                max-height: 600px;
                animation-name: ${mobile};
                &:after {
                    animation-name: ${mobile};
                    content: none;
                    width: 650px;
                    height 100px;
                    position: absolute;
                    bottom: 300px;
                    left: 150px;
                }  
            }
            @media only screen and (max-width: 414px) {
                &:after {
                    content: none;
                }
            }  
            @media only screen and (max-height: 414px) and (orientation: landscape) {
                max-height: 475px;
                margin-top: -35px;
                &:after {
                    content: none;
                }
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