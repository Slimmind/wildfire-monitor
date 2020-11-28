import { ReactComponent as FireIcon } from "../assets/fire.svg";
import { ReactComponent as VolcanoIcon } from "../assets/volcano.svg";
import { ReactComponent as IceIcon } from "../assets/iceberg.svg";
import { ReactComponent as StormIcon } from "../assets/storm.svg";


const LocationMarker = ({ lat, lng, type, onClick }) => {
    let icon;
    switch(type) {
        case "wildfires":
            icon = <FireIcon className="location-icon" />
            break;
        case "volcanoes":
            icon = <VolcanoIcon className="location-icon" />
            break;
        case "seaLakeIce":
            icon = <IceIcon className="location-icon" />
            break;
        case "severeStorms":
            icon = <StormIcon className="location-icon" />
    };
    
    return (
        <div className="location-marker" onClick={onClick}>
            {icon}
        </div>
    );
};

export default LocationMarker;
