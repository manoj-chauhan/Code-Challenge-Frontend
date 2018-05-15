import React from "react"

const data = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [102,0.5]
      },
      "properties": {
        "prop0": "value0"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [[102, 0], [103, 1], [104, 0],[105, 1]]
      },
      "properties": {
        "prop0": "value0",
        "prop1": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[100, 0], [101, 0], [101, 1], [100, 1], [100, 0]]]
      },
      "properties": {
        "prop0": "value0",
        "prop1": {
            "this": "that"
          }
      }
    }
  ]
}

class MapComponent extends React.Component {

    render() {
        return(
            <div>
                <div id="map"></div>
            </div>
        );
    }


    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD4bxqa7J4NC_e3iuT5gt12OLrHuhiMooI";
        script.async = true;
        script.addEventListener(
            'load',
            function (e) {
                let map = new document.google.maps.Map(document.getElementById('map'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8
                });
                console.log("finally callback came");
            },
            false
        );
        document.body.appendChild(script);
        console.log("exiting");
    }
}

export default MapComponent;
