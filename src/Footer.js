import React from 'react';
import styled, { keyframes } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons' ;
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' ;

library.add(faInstagram, faEnvelope);

const Footer = () => {
    const [ year, setYear] = React.useState('');

    const Footer = styled.div `
        position: absolute;
        bottom: 0;
        width: 100vw;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
    `;    

    const FooterText = styled.p `
        font-family: Megrim;
        color: #ededed;
        margin-right: 20px;
    `;
    
    const getYear = () => {
        return new Date().getFullYear();
    };

    const instagramLink = () => {
        return (
            <a href="https://www.instagram.com/?hl=en" target="blank" />
        );
    };

    const emailLink = () => {
        // window.location.href = `mailto:themorningstarbus@gmail.com`;
    }

    return (
        <Footer>
            <FooterText>© {getYear()} morningStar, LLC.</FooterText>
            <FontAwesomeIcon 
                icon={faInstagram}
                style={{ color: '#ededed', fontSize: '30px', marginRight: '20px'}}
            >
            </FontAwesomeIcon>
            <a href="mailto:themorningstarbus@gmail.com?Subject=Hello%20again" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon 
                    icon={faEnvelope}
                    style={{ color: '#ededed', fontSize: '30px', marginRight: '20px'}}
                    onClick={emailLink()}
                >
                </FontAwesomeIcon>
            </a>           
        </Footer>
    );
}

export default Footer;