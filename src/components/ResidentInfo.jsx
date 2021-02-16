
const ResidentInfo = ({ data }) => {

    const { name, image, status, bornPlace, numberEpisodes } = data;

    // console.log(dataResidents);

    return (
        <div className="border card">
            <div>
                <img src={image} alt={name} />
            </div>

            <div className="card-body ">
                <h3>{name}</h3>

                <span><strong>Status:</strong> {status}</span>
                <span><strong>Species:</strong>  {bornPlace}</span>
                <span><strong>Number of Episodes: </strong>{numberEpisodes}</span>
            </div>

        </div>
    )
}

export default ResidentInfo;