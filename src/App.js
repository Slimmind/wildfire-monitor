import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchEvents = async () => {
        setLoading(true);
        const res = await fetch(
            "https://eonet.sci.gsfc.nasa.gov/api/v3/events?api_key=aYbaJTlX46IFpdR2b7iTbG4uama3RxKnFb2lDRwK"
        );
        const { events } = await res.json();

        setEventData(events);
        setLoading(false);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div>
            <Header />
            {!loading ? <Map eventData={eventData} /> : <Loader />}
        </div>
    );
}

export default App;
