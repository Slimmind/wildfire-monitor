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
        const lat = ev.geometry[0].coordinates.flat(2)[0];
        const lng = ev.geometry[0].coordinates.flat(2)[1];
        const category = ev.categories[0];
        return (
            <LocationMarker
                key={`${lat}&${lng}`}
                lat={lng}
                lng={lat}
                description={ev.title}
                type={category.id}
                title={category.title}
                sources={ev.sources}
                onClick={() =>
                    setLocationInfo({
                        id: ev.id, 
                        description: ev.title, 
                        title: category.title, 
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
                center={currentLocation}
                defaultZoom={5}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    );
};

export default Map;
