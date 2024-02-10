import React from "react";
import { Link } from "react-router-dom";
import Api from "../../api/location.json"

const LocationsPage = () => {
    return (<div className="gridPage-div">
        <h1>Локации</h1>
        <div className="grid-div">
            {Api.map((el) => {
                return <Link to={String(el.id)} key={el.id} className="element-grid-div">
                    <p>{el.type }</p>
                    <p>{el.name }</p>
                    <p>{el.dimension}</p>
                </Link>
            })}
        </div>
    </div>);
}
 
export default LocationsPage;