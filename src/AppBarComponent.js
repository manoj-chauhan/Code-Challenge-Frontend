import React from "react"

const barStyle = {
        height: 40,
        backgroundColor: 'red'
};

export default class AppBarComponent extends React.Component {
    render(){
        return(
            <div style={barStyle}></div>
        )
    }
}