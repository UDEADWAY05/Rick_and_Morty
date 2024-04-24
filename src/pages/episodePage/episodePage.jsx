import React from "react";
import { useParams, Navigate } from "react-router-dom"
import config from "../../config.json";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../components/Loader";
import styles from "./Episode.module.scss"

export const EpisodePage = () => {
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
        return <Loader />
    }

    return (
        <div className={styles["cardPage"]}>
            <div className={styles["card"]}>
                <div className={styles["card-about"]}>
                    <h1 className={styles["card-title"]}>{ data.name} </h1>
                    <p className={styles["card-describe"]}>{ "Name: " + data.name }</p>
                    <p className={styles["card-describe"]}>{ "Episode: " + data.episode }</p>
                    <p className={styles["card-describe"]}>{"Date: " + data.air_date}</p>
                    <p className={styles["card-describe"]}>{"Id: " + data.id}</p>
                </div>
            </div>
        </div>
    );
}