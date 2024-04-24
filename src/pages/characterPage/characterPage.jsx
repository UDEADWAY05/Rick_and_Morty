import React from "react";
import { useParams, Navigate, Link } from "react-router-dom"
import config from "../../config.json";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../components/Loader";
import styles from "./Character.module.scss"

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

    const { name, species, gender, status, image } = data;

    return (
        <div className={styles["cardPage"]}>
            {error && <div key="error">error</div>}
            <div className={styles["card"]} key="card">
                <div className={styles["card-left"]}>
                    <img alt={name} src={image} className={styles["characters-img"]} />
                </div>
                <div className={styles["card-right"]}>
                    <p key="title" className={styles["card-title"]}>{name} </p>
                    <p key="name" className={styles["card-describe"]}>{"Name: " + name}</p>
                    <p key="species" className={styles["card-describe"]}>{"Species: " + species}</p>
                    <p key="gender" className={styles["card-describe"]}>{"Gender: " + gender}</p>
                    <p key="status" className={styles["card-describe"]}>{"Status: " + status}</p>
                    <p key="id" className={styles["card-describe"]}>{"Id: " + id}</p>
                </div>
            </div>
            <div className={styles["card-second"]}>
                <h1 className={styles["title"]}>Эпизоды</h1>
                <div className={styles["card-second-grid"]}>
                    {data.episode && data.episode.map((el, index) => {
                        return <Link key={index} className={styles["card-mini"]} to={"/episodes/" + el.id}>
                            <div className={styles["card-mini-title"]}>{el.name}</div>
                            <div className={styles["card-mini-describe"]}>{el.episode}</div>
                        </Link>
                    })
                    }
                </div>
            </div>
        </div>
    );
};