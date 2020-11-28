import { ReactComponent as FireIcon } from "../assets/fire.svg";
import { ReactComponent as VolcanoIcon } from "../assets/volcano.svg";
import { ReactComponent as IceIcon } from "../assets/iceberg.svg";
import { ReactComponent as StormIcon } from "../assets/storm.svg";

const getIconByType = (type) => {
    switch(type) {
        case "wildfires":
            return <FireIcon className="location-icon" />
        case "volcanoes":
            return <VolcanoIcon className="location-icon" />
        case "seaLakeIce":
            return <IceIcon className="location-icon" />
        case "severeStorms":
            return <StormIcon className="location-icon" />
        default:
            return null;
    };
}

const LocationMarker = ({ type, onClick }) => (
    <div className="location-marker" onClick={onClick}>
        {getIconByType(type)}
    </div>
);

export default LocationMarker;
