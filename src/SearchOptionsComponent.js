import React from "react"


const barStyle = {
    height: 58,
    position:'relative',
    backgroundColor:'white',
    zIndex:'3',
    boxShadow: `rgba(0,0,0,.2) 0 2px 2px 0`
};

export default class SearchOptionsComponent extends React.Component {
    render(){
        return(
            <div style={barStyle}></div>

        )
    }
}