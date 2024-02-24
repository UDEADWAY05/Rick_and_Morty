import React from "react";
import { useParams, Navigate } from "react-router-dom"
import config from "../../config.json";
import { useFetch } from "../../hooks/useFetch";

const EpisodePage = () => {
    const { id } = useParams()
    const {
        data,
        isLoading,
        error,
    } = useFetch(config.episodes + id)
    
    if (error && error.response.status === 404) {
        return <Navigate to="*" />
    }

    if (isLoading) {
        return "loading..."
    }

    return (
        <div className="cardPage">
            <div className="card">
                <div className="card-right">
                    <h1>{ data.name} </h1>
                    <p className="card-describe">{ "Name: " + data.name }</p>
                    <p className="card-describe">{ "Episode: " + data.episode }</p>
                    <p className="card-describe">{"Date: " + data.air_date}</p>
                    <p className="card-describe">{"Id: " + data.id}</p>
                </div>
            </div>
        </div>
    );
}
 
export default EpisodePage;