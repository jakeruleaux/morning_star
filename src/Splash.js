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
                backgroundColor: 'pink'
            },
            
        }
        
        return(
            <div style={styles.splashContainer}>
                <span className="megrimFont">* test</span>
            </div>
        );
    }
}

export default Splash;