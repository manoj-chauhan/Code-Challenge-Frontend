import React from "react"
import FlatButton from 'material-ui/FlatButton';

const barStyle = {
    backgroundColor: '#20C063',
    display:`flex`,
    justifyContent:`space-between`,
    height:48
};



const signInButtonStyle = {
    marginTop:6,
    color:`white`
};

const logoStyle = {
    marginTop:6,
};

export default class AppBarComponent extends React.Component {
    render(){
        return(
            <div style={barStyle}>
                <img src={require('./images/logo.png')} style={logoStyle}/>
                <div>
                    <FlatButton label="Sign In" style={signInButtonStyle} />
                    <FlatButton label="Sign Up" style={signInButtonStyle} />
                </div>
            </div>
        )
    }
}