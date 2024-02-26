import React from "react";
import { useParams, Navigate } from "react-router-dom"
import config from "../../config.json";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../common/loader";

const LocationPage = () => {
    const { id } = useParams()
    const {
        data,
        isLoading,
        error,
    } = useFetch(config.locations + id)
    
    if (error && error.response.status === 404) {
        return <Navigate to="*" />
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="cardPage">
            <div className="card">
                <div className="card-right">
                    <h1>{ data.name} </h1>
                    <p className="card-describe">{"Name: " + data.name}</p>
                    <p className="card-describe">{"Dismension: " + data.dimension}</p>
                    <p className="card-describe">{ "Type: " + data.type}</p>
                    <p className="card-describe">{ "Id: " + data.id}</p>
                </div>
            </div>
        </div>
    );
}
 
export default LocationPage;