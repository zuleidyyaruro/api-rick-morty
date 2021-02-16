import { useState } from "react";

const LocationInfo = ({ location }) => {

    const {nameLocation, typeLocation, dimensionLocation, numberResidentsLocation}=location;

    return (
        <div>
            <div className="location-info">
                <h2>Location</h2>
                <span><strong>Name: </strong>{nameLocation}</span>
                <span><strong>Type: </strong> {typeLocation}</span>
                <span><strong>Dimension: </strong>{dimensionLocation}</span>
                <span><strong>Number of Residents: </strong> {numberResidentsLocation}</span>
            </div>
        </div>
    );
}

export default LocationInfo;