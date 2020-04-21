import React from 'react';
import styled, { keyframes } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons' ;

library.add(faInstagram);



const Footer = () => {
    const [ year, setYear] = React.useState('');

    const Footer = styled.div `
        position: absolute;
        bottom: 0;
        width: 100vw;
        display: flex;
        flex-wrap: no-wrap;
    `;    

    const FooterText = styled.p `
        font-family: Megrim;
        color: #ededed;
    `;
    
    const getYear = () => {
        return new Date().getFullYear();
    };

    return (
        <Footer>
            <FooterText>© {getYear()} morningStar, LLC.</FooterText>
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#ededed', fontSize: '30px'}} />
        </Footer>
    );
}

export default Footer;