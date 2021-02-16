
const ResidentInfo = ({data}) => {

    const {name, image, status, bornPlace, numberEpisodes}=data;

    // console.log(dataResidents);

    return (
        <div className="resident">
            <p>{name}</p>
            <img src={image} />
            <p>Status: <span>{status}</span></p>
            <p>Species: <span>{bornPlace}</span></p>
            <p>Origin: <span>{numberEpisodes}</span></p>
        </div>
    )
}

export default ResidentInfo;