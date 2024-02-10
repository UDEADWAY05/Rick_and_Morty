import React from "react";
import { Link } from "react-router-dom";
import Api from "../../api/characters.json"

const CharactersPage = () => {
    return (<div className="gridPage-div">
        <h1>Персонажи</h1>
        <div className="grid-div">
            {Api.map((el) => {
                return <Link to={String(el.id)} key={el.id} className="element-grid-div">
                    <img className="characters-img" src={el.image}></img>
                    <p>{el.name}</p>
                    <p>{el.species}</p>
                </Link>
            })}
        </div>
    </div>);
}
 
export default CharactersPage;