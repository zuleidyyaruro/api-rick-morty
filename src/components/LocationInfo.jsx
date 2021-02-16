import { useState } from "react";

const LocationInfo = ({ location }) => {

    const {nameLocation, typeLocation, dimensionLocation, numberResidentsLocation}=location;

    return (
        <div>
            <div className="location-info border">
                <h2 className="border">Location</h2>
                <span><strong>Name: </strong>{nameLocation}</span>
                <span><strong>Type: </strong> {typeLocation}</span>
                <span><strong>Dimension: </strong>{dimensionLocation}</span>
                <span><strong>Number of Residents: </strong> {numberResidentsLocation}</span>
            </div>
        </div>
    );
}

export default LocationInfo;