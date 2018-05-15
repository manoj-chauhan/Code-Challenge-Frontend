import React from "react"

const barStyle = {
        height: 48,
        backgroundColor: '#20C063'
};

export default class AppBarComponent extends React.Component {
    render(){
        return(
            <div style={barStyle}></div>
        )
    }
}