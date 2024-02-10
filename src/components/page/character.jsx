import React from "react";
import { useParams, Navigate } from "react-router-dom"
import Api from "../../api/characters.json"



const CharacterPage = () => {
    const params = useParams()
    let character = Api.filter((el) => el.id == params.id)
    
    if (character.length < 1) {
        return <Navigate to="*" />
    }

    character = character[0]

    return (
        <div className="cardPage">
            <h1></h1>
            <div className="card">
                <img src={character.image} className="characters-img" />
                <div className="card-right">
                    <h1>{ character.name} </h1>
                    <p className="card-describe">{ "Name: " + character.name }</p>
                    <p className="card-describe">{ "Species: " + character.species }</p>
                    <p className="card-describe">{ "Gender: " + character.gender}</p>
                    <p className="card-describe">{ "Status: " + character.status}</p>
                    <p className="card-describe">{ "Id: " + character.id }</p>
                </div>
            </div>
        </div>
    );
}
 
export default CharacterPage;