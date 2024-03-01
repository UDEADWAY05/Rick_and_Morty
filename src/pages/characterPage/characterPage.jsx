import React from "react";
import { useParams, Navigate, Link } from "react-router-dom"
import config from "../../config.json";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../components/Loader";
import "./character.scss"


export const CharacterPage = () => {
    const { id } = useParams()
    const {
        data,
        isLoading,
        error,
    } = useFetch(config.characters + id)

    if (error && error.response.status === 404) {
        return <Navigate to="*" />
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="cardPage">
            {error && <div key="error">error</div>}
            <div className="card" key="card">
                <div className="card-left">
                    <img alt={data.name} src={data.image} className="characters-img" />
                </div>
                <div className="card-right">
                    <h1 key="title">{data.name} </h1>
                    <p key="name" className="card-describe">{"Name: " + data.name}</p>
                    <p key="species" className="card-describe">{"Species: " + data.species}</p>
                    <p key="gender" className="card-describe">{"Gender: " + data.gender}</p>
                    <p key="status" className="card-describe">{"Status: " + data.status}</p>
                    <p key="id" className="card-describe">{"Id: " + data.id}</p>
                </div>
            </div>
            <div className="card-second">
                <h1 className="title">Эпизоды</h1>
                <div className="card-second-grid">
                    {data.episode && data.episode.map((el, index) => {
                        return <Link key={index} className="link card-mini" to={"/episodes/" + el.id}>
                            <div>{el.name}</div>
                            <div>{el.episode}</div>
                        </Link>
                    })
                    }
                </div>
            </div>
        </div>
    );
};