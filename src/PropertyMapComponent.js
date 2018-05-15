import React from "react"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const PropertyMapComponent = compose(
    withProps(
        {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={
            {
                height: `100%`
            }
        }/>,
        containerElement: <div style={
            {
                height: `calc(100vh - 100px)`,
                flexBasis: `50%`
            }
        }/>,
        mapElement: <div style={
            {
                height: `100%`
            }
        }/>,
    }
    ),
    withScriptjs,
    withGoogleMap
)((props) => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={
                {
                    lat: -34.397,
                    lng: 150.644
                }
            }>
            {
                props.isMarkerShown &&
                <Marker
                    position={
                        {
                            lat: -34.397,
                            lng: 150.644
                        }
                    }
                    onClick={
                        props.onMarkerClick
                    }
                />
            }
        </GoogleMap>
    )
)

export default PropertyMapComponent;
