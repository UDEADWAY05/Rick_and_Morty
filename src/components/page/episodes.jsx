import React from "react";
import { Link } from "react-router-dom";
import Api from "../../api/episode.json"


const EpisodesPage = () => {
    return (<div className="gridPage-div">
        <h1>Эпизоды</h1>
        <div className="grid-div">
            {Api.map((el) => {
                return <Link to={String(el.id)} key={el.id} className="element-grid-div">
                    <p>{el.name }</p>
                    <p>{el.episode}</p>
                    <p>{el.air_date }</p>
                </Link>
            })}
        </div>
    </div>);
}
 
export default EpisodesPage;