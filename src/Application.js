import React, {Component} from 'react';
import SearchResultGridListComponent from './SearchResultGridListComponent';
import AppBarComponent from "./AppBarComponent";
import SearchOptionsComponent from "./SearchOptionsComponent";
import PropertyMapComponent from "./PropertyMapComponent";


const styl = {
    display:'flex'
};

const grid_container = {
    flexBasis:'50%',
    backgroundColor:'yellow',
};
const map_container = {
    flexBasis:'50%',
    backgroundColor:'pink',
};

class Application extends Component {
    render() {
        return (
            <div>
                <AppBarComponent/>
                <SearchOptionsComponent/>
                <div style={styl}>
                    <div style={grid_container}>
                        <SearchResultGridListComponent/>
                    </div>
                    <div style={map_container}>
                        <PropertyMapComponent/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Application;
