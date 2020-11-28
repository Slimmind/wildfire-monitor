import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData }) => {
    const [locationInfo, setLocationInfo] = useState(null);
    const [currentLocation, setCurrentLocation] = useState({lat: -7, lng: -55});

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            setCurrentLocation({lat: position.coords.latitude, lng: position.coords.longitude });
        });
    }

    getCurrentLocation();

    const markers = eventData.map((ev) => {
        return (
            <LocationMarker
                key={`${ev.geometry[0].coordinates.flat(2)[0]}&${ev.geometry[0].coordinates.flat(2)[1]}`}
                lat={ev.geometry[0].coordinates.flat(2)[1]}
                lng={ev.geometry[0].coordinates.flat(2)[0]}
                description={ev.title}
                type={ev.categories[0].id}
                title={ev.categories[0].title}
                sources={ev.sources}
                onClick={() =>
                    setLocationInfo({
                        id: ev.id, 
                        description: ev.title, 
                        title: ev.categories[0].title, 
                        sources: ev.sources 
                    })
                }
            />
        );
    });

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyBay_q31Pe-zmLWeB-xOXS1xa-lCRY4MFM",
                }}
                defaultCenter={currentLocation}
                defaultZoom={5}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    );
};

export default Map;
