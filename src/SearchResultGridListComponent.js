import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import axios from "axios"

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        backgroundColor:'grey',
        overflowY: 'auto',
        flexBasis:'100%',
        height: `calc(100vh - 100px)`
    },
};

const tilesData = [
    {
        img: 'images/home.jpeg',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: 'images/home.jpeg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'images/home.jpeg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'images/home.jpeg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'images/home.jpeg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'images/home.jpeg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'images/home.jpeg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: 'images/home.jpeg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];


export default class SearchResultGridListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchResult: tilesData};
    }

    render() {
        return(
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {this.state.searchResult.map((tile) => (
                        <GridTile
                            key={tile.img}
                            title={tile.title}
                            subtitle={<span>by <b>{tile.author}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                            <img src={tile.img} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }

    componentDidMount() {
        var self = this;
        axios.get('http://localhost:8000/property')
            .then(function (response) {
                self.setState({searchResult: tilesData});
                console.log("Response: " + response);
            })
            .catch(function (error) {
                console.log("Error: " + error);
            })


    }
}