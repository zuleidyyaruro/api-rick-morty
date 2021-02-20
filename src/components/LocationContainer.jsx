import { useEffect, useState } from "react";
import axios from "axios";

import LocationInfo from "./LocationInfo";
import ResidentContainer from "./ResidentContainer";

const LocationContainer = ({ id }) => {

    const url = `https://rickandmortyapi.com/api/location/${id}`;

    // Guarda los datos de la ubicacion
    const [location, setLocation] = useState();
    const [locationData, setLocationData] = useState({});

    // Ejecuta la funcion axios.get cada vez que el id cambia
    // Obtenemos los datos de la ubicacion y se almacenan en location
    useEffect(() => {
        if (id) {
            axios.get(url).then(response => {
                setLocation(response.data)
            })
        }
    }, [id]);

    // Obtenemos cada uno de los datos de la ubicacion y los almacenamos en un objeto. 
    // El use efect se ejecuta cada vez que la variable location cambia
    useEffect(() => {
        if (location) {
            const nameLocation = location.name;
            const typeLocation = location.type;
            const dimensionLocation = location.dimension;
            const numberResidentsLocation = location.residents.length;
            const residentsLocation = location.residents.map(value => value);
            const dataLocation = { nameLocation, typeLocation, dimensionLocation, numberResidentsLocation, residentsLocation };
            setLocationData(dataLocation);
        }
    }, [location]);

    const { numberResidentsLocation, residentsLocation } = locationData;
    

    return (
        <div>
            <LocationInfo location={locationData} />

            <div className="container ">
                <div className="row text-center">
                    {numberResidentsLocation > 0 && residentsLocation.map((url, index) => {
                        return <ResidentContainer url={url} key={index + 1} />
                    })}
                </div>

            </div>
        </div>
    );
}

export default LocationContainer;