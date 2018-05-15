import React from "react"
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

const barStyle = {
    height: 58,
    position:'relative',
    backgroundColor:'white',
    zIndex:'3',
    boxShadow: `rgba(0,0,0,.2) 0 2px 2px 0`,
    display:`flex`,
    alignItems:`center`,
    padding:`0 10px`
};

const searchButtonStyle = {
    marginLeft:`10px`
};


export default class SearchOptionsComponent extends React.Component {

    state = {
        dataSource: ['Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1'],
    };

    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    };

    render(){
        return(
            <div style={barStyle}>
                <AutoComplete
                    hintText="City"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput}
                />
                <RaisedButton
                    style={searchButtonStyle}
                    label="Search"
                    labelPosition="before"
                    containerElement="label"
                />
            </div>

        )
    }
}