const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h3>{info.title}</h3>
            <p className="description">{info.description}</p>
            <small>Sources:</small>
            <ul>
                {
                    info.sources.map(source => (
                        <li key={source.url}>
                            <a href={source.url} target="_blank">{source.id}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default LocationInfoBox;
