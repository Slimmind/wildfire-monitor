const LocationInfoBox = ({ info: { title, description, sources } }) => (
    <div className="location-info">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <small>Sources:</small>
        <ul>
            {
                sources.map(source => (
                    <li key={source.url}>
                        <a href={source.url} target="_blank" rel="noreferrer">{source.id}</a>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default LocationInfoBox;
