import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

export default class SearchResultGridListComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {this.props.searchResult.map((tile) => (
                        <GridTile
                            key={tile.beds}
                            title={tile.propertyName}
                            subtitle={<span>by <b>{tile.city}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                            {/*<img src={tile.img} />*/}
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }

}