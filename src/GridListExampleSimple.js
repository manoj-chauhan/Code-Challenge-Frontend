import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Media from "react-media";

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto'
    },
};


const tilesData = [

    {
        img: './images/image3.jpeg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: './images/image4.jpeg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: './images/image5.jpeg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: './images/image6.jpeg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: './images/image7.jpeg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: './images/image8.jpeg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    }, {
        img: './images/image3.jpeg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: './images/image4.jpeg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: './images/image5.jpeg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: './images/image6.jpeg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: './images/image7.jpeg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: './images/image8.jpeg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    }, {
        img: './images/image3.jpeg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: './images/image4.jpeg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: './images/image5.jpeg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: './images/image6.jpeg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: './images/image7.jpeg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: './images/image8.jpeg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    }, {
        img: './images/image3.jpeg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: './images/image4.jpeg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: './images/image5.jpeg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: './images/image6.jpeg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: './images/image7.jpeg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: './images/image8.jpeg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    }, {
        img: './images/image3.jpeg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: './images/image4.jpeg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: './images/image5.jpeg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: './images/image6.jpeg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: './images/image7.jpeg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: './images/image8.jpeg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    }, {
        img: './images/image3.jpeg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: './images/image4.jpeg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: './images/image5.jpeg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: './images/image6.jpeg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: './images/image7.jpeg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: './images/image8.jpeg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    }, {
        img: './images/image3.jpeg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: './images/image4.jpeg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: './images/image5.jpeg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: './images/image6.jpeg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: './images/image7.jpeg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: './images/image8.jpeg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    }, {
        img: './images/image3.jpeg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: './images/image4.jpeg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: './images/image5.jpeg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: './images/image6.jpeg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: './images/image7.jpeg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: './images/image8.jpeg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    }, {
        img: './images/image3.jpeg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: './images/image4.jpeg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: './images/image5.jpeg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: './images/image6.jpeg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: './images/image7.jpeg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: './images/image8.jpeg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    }, {
        img: './images/image3.jpeg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: './images/image4.jpeg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: './images/image5.jpeg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: './images/image6.jpeg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: './images/image7.jpeg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: './images/image8.jpeg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    }, {
        img: './images/image3.jpeg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: './images/image4.jpeg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: './images/image5.jpeg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: './images/image6.jpeg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: './images/image7.jpeg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: './images/image8.jpeg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
    <div style={styles.root}>


        <Media query="(max-width: 599px)">
            {matches =>
                matches ? (
                    <GridList cellHeight={180} cols={2}>
                        {tilesData.map((tile) => (
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
                ) : (
                    <GridList cellHeight={180} cols={4}>
                        {tilesData.map((tile) => (
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
                )
            }
        </Media>



    </div>
);

export default GridListExampleSimple;
