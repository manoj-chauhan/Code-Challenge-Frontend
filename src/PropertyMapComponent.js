import React from "react"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const PropertyMapComponent = compose(
    withProps(
        {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
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
            defaultZoom={12}
            defaultCenter = {
                {
                    lat: 28.669573,
                    lng: 77.113815
                }
            }>
            {
                props.isMarkerShown &&
                <Marker
                    position={
                        {
                            lat: 28.701072,
                            lng: 77.165473
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
