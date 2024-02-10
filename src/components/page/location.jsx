import React from "react";
import { useParams, Navigate } from "react-router-dom"
import Api from "../../api/location.json"

const LocationPage = () => {
    const params = useParams()
    let character = Api.filter((el) => el.id == params.id)

    if (character.length < 1) {
        return <Navigate to="*" />
    }

    console.log(character[0])
    character = character[0]

    return (
        <div className="cardPage">
            <h1></h1>
            <div className="card">
                <div className="card-right">
                    <h1>{ character.name} </h1>
                    <p className="card-describe">{"Name: " + character.name}</p>
                    <p className="card-describe">{"Dismension: " + character.dimension}</p>
                    <p className="card-describe">{ "Type: " + character.type}</p>
                    <p className="card-describe">{ "Id: " + character.id}</p>
                </div>
            </div>
        </div>
    );
}
 
export default LocationPage;