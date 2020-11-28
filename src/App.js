import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://eonet.sci.gsfc.nasa.gov/api/v3/events?api_key=aYbaJTlX46IFpdR2b7iTbG4uama3RxKnFb2lDRwK")
        .then(response => response.json())
        .then(({events}) => {
            setEventData(events);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <Header />
            {!loading ? <Map eventData={eventData} /> : <Loader />}
        </>
    );
}

export default App;
