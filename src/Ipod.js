import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faBackward,faForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons' // <-- import styles to be used


class Ipod extends React.Component{
    //constructor 
    constructor(){
        super();
        this.state = {
            activeItem : 'NowPlaying',
            activePage : 'Home',
            enter : 0,
            play : true
        }
    }
    
    render() {
        return (
            <div style={styles.ipodBody}>

                <div style={styles.screen}>

                </div>
                <div style={styles.wheel}>
                    <div style={styles.buttonContainer}>
                        <div style={styles.menuButton}>
                            <FontAwesomeIcon style={styles.icons} icon={faBars} />
                        </div>

                    </div>
                    <div style={styles.buttonContainer}>
                        <div style={styles.midButton}>
                            <FontAwesomeIcon style={styles.icons} icon={faBackward} />
                        </div>
                        <div style={styles.midButton}>
                            <div style={styles.centerButton}>
                            
                            </div>
                            
                        </div>
                        <div style={styles.midButton}>
                            <FontAwesomeIcon style={styles.icons} icon={faForward} />
                        </div>

                    </div>
                    <div style={styles.buttonContainer}>
                        <div style={styles.menuButton}>
                            <FontAwesomeIcon style={styles.icons} icon={faPlay} />
                            &nbsp;<FontAwesomeIcon style={styles.icons} icon={faPause} />
                        </div>

                    </div>

                </div>
                
            </div>
        )
    }
}
// styling for iPod
const styles = {
    ipodBody : {
        height: "525px",
        width: "300px",
        background: "silver",
        margin: "auto",
        padding: 25
    },
    screen:{
        height: 200,
        borderRadius : 5,
        width : "auto",
        background: "black",
        margin: "auto",
        // marginTop: 25
    },
    wheel:{
        height: 300,
        width: 300,
        borderRadius : '50%',
        background: 'white',
        marginTop: 25
    },
    buttonContainer : {
        height: 100,
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    menuButton:{
        alighSelf: 'center',
        marginTop: 35
        
    },
    midButton:{
        height: 100,
        width: 100,
        display: 'flex',
        flexDirection: 'column',
        alighSelf: 'center',
        textAlign: 'center',
        margin: 35

    },
    centerButton: {
        height: 100,
        width: 100,
        borderRadius: '50%',
        background: 'silver',
        margin: -35
    },
    icons: {
        alighSelf: 'center',
        fontSize: 30,
    }

}
export default Ipod;