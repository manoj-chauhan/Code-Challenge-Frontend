import React from "react"
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import axios from "axios/index";

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

    constructor(props) {
        super(props)
        this.state = {
             dataSource : []
        }
    }

    handleUpdateInput = (value) => {
            if(value.length > 2) {
                this.fetchCitySuggestions(value);
            }
    }


    onCitySelected = (selection, index) => {
        console.log("selection: " + selection + "   index: " + index);
    }

    onSearchButtonClicked(button) {
        console.log("Search Button Clicked");
        var self = this;
        axios.get('http://34.217.10.112:8000/property')
            .then(function (response) {
                self.props.onResultReceived(response.data)
                console.log("Response: " + response);
            })
            .catch(function (error) {
                console.log("Error: " + error);
            })
    }


    render(){
        return(
            <div style={barStyle}>
                <AutoComplete
                    hintText="City"
                    dataSource={this.state.dataSource}
                    onNewRequest={this.onCitySelected}
                    onUpdateInput={this.handleUpdateInput}
                />
                <RaisedButton
                    style={searchButtonStyle}
                    label="Search"
                    labelPosition="before"
                    containerElement="label"
                    onClick={this.onSearchButtonClicked}
                />
            </div>

        )
    }


    fetchCitySuggestions(keyword) {
        var self = this;
        axios.get('http://34.217.10.112:8000/city/suggestions?initials=' + keyword)
            .then(function (response) {
                self.updateDataSourceForCitySuggestion(response.data)
                console.log("Response: " + response);
            })
            .catch(function (error) {
                console.log("Error: " + error);
            })


    }

    updateDataSourceForCitySuggestion(data) {
        let dSource = [];
        data.map(item => {
                dSource.push(item.name)
        }
        )
        this.setState({
            dataSource : dSource
        })

    }
}