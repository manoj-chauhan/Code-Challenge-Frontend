import React, {Component} from 'react';
import SearchResultGridListComponent from './SearchResultGridListComponent';
import AppBarComponent from "./AppBarComponent";
import SearchOptionsComponent from "./SearchOptionsComponent";
import PropertyMapComponent from "./PropertyMapComponent";
import axios from "axios/index";

const styl = {
    display:'flex'
};

const grid_container = {
    flexBasis:'50%',
    backgroundColor:'#eeeeee',
};
const map_container = {
    flexBasis:'50%',
    backgroundColor:'#eeeeee',
};

class Application extends Component {

    updateResult(searchResult) {
        this.setState({
            searchResult:searchResult
        });
    }

    constructor(props) {
        super(props)
        this.updateResult = this.updateResult.bind(this);
        this.state = {
            searchResult:[]

    }
    }


    render() {
        return (
            <div>
                <AppBarComponent/>
                <SearchOptionsComponent onResultReceived={this.updateResult}/>
                <div style={styl}>
                    <div style={grid_container}>
                        <SearchResultGridListComponent searchResult={this.state.searchResult}/>
                    </div>
                    <div style={map_container}>
                        <PropertyMapComponent searchResult={this.state.searchResult}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Application;
