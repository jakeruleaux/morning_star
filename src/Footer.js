import React from 'react';
import styled, { keyframes } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons' ;
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' ;

library.add(faInstagram, faEnvelope);

const Footer = () => {
    
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
        color: #c9c9c9;
        margin-right: 20px;
        font-size: 10px;
    `;
    
    const getYear = () => {
        return new Date().getFullYear();
    };

    return (
        <Footer>
            <FooterText>© {getYear()} morningStar, LLC.</FooterText>
            <a href="https://www.instagram.com/morningstarbus/?hl=en" target="blank">
                <FontAwesomeIcon 
                    icon={faInstagram}
                    style={{ color: '#ededed', fontSize: '30px', marginRight: '20px', marginBottom: '10px' }}
                />
            </a>
            <a href="mailto:themorningstarbus@gmail.com?Subject=Hello%20again" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon 
                    icon={faEnvelope}
                    style={{ color: '#ededed', fontSize: '30px', marginRight: '20px', marginBottom: '10px' }}
                />
            </a>           
        </Footer>
    );
}

export default Footer;