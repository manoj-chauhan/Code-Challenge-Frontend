import React from "react"
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
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





export default class SearchOptionsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: ['Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1']
        }
    }

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

    componentDidMount() {
        var self = this;
        axios.get('http://localhost:8000/property')
            .then(function (response) {
                self.props.onResultReceived(response.data)
                console.log("Response: " + response);
            })
            .catch(function (error) {
                console.log("Error: " + error);
                self.props.onResultReceived(tilesData)
            })


    }
}