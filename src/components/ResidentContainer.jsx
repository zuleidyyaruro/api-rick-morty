import axios from "axios";
import { useState, useEffect } from "react";
import ResidentInfo from "./ResidentInfo";

const ResidentContainer = ({ url }) => {

    const [resident, setResidents] = useState(null);
    const [locationDataResident, setLocationDataResident] = useState({});
    
    // Este useEffect se ejecuta cada vez que url cambia y se almacena la data en residents
    useEffect(() => {
        axios.get(url).then(response => {
            setResidents(response.data);
        })
    }, [url])

    useEffect(() => {
        if (resident !== null) {
            setLocationDataResident({
                name: resident.name,
                image: resident.image,
                status: resident.status,
                bornPlace: resident.origin.name,
                numberEpisodes: resident.episode.length
            });
        }
    }, [resident])

    return (
        <div className=" col margin-auto col-lg-3">


            <ResidentInfo data={locationDataResident} />
        </div>
    );
}

export default ResidentContainer;