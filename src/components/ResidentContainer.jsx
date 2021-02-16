import axios from "axios";
import { useState, useEffect } from "react";
import ResidentInfo from "./ResidentInfo";

const ResidentContainer = ({ location }) => {

    const { residentsLocation } = location;

    const [residents, setResidents] = useState({});

    // Este useEffect se ejecutará cada vez que location cambie

    useEffect(() => {

        if (residentsLocation !== undefined) {
            const listItems = residentsLocation.map((value) => {
                const arrayresidents = [];
                arrayresidents.push(residents);
                console.log(arrayresidents);
                axios.get(value).then(response => {
                    handleChangeArrayResident(response.data);
                })
            })
        } else {
            console.log("no hay residentes")
        }
    }, [location])

    useEffect(()=>{

        console.log("Hola")
    }, [residents])


    const handleChangeArrayResident = (data) => {
        setResidents({
            name: data.name,
            image: data.image,
            status: data.status,
            bornPlace: data.origin.name,
            numberEpisodes: data.episode.length
        });
    }

    return (
        <div>
            {residents ? <ResidentInfo dataResidents={residents} /> : "Hola"}

        </div>
    );
}

export default ResidentContainer;