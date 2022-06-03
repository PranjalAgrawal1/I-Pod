import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
class Games extends React.Component{
    render(){
        return(
            <div style={styles.settings} >
                {/* title bar */}
                <div style={styles.titleBar}>
                        iPod
                        <FontAwesomeIcon icon={faBatteryFull} />
                    </div>
                {/* game */}
                <div style={{width : '100%' , height : '90%'}}>
                    <img style={styles.image} src="https://media1.giphy.com/media/d9QiBcfzg64Io/giphy.gif" />
                </div>
            </div>
        );
    }
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'100%',
        height:'100%',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'50',
        borderRadius:'5px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(192, 192, 192), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'
    },
    battery :{
        width : '20px',
        height: '20px',
    }
}
export default Games;