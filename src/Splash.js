import React, {Component} from 'react';
import './App.css';

class Splash extends Component {
    constructor(props){
        super(props)
        this.state = {
            backgroundColor: ''
        }
    }
    render() {

        const styles = {
            splashContainer: {
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                top: '0',
                left: '0',
                display: 'flex',
                justifyContent: 'center'
            },
            logo: {
                fontSize: '1000px',
            }
            
        }
        
        return(
            <div style={styles.splashContainer} className="spashContainer">
                <span className="megrimFont" style={styles.logo}>*</span>
            </div>
        );
    }
}

export default Splash;