import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import config from "../../config.json";
import styles from "./Episodes.module.scss";

export const EpisodesPage = () => {
    const [page, setPage] = useState(1)
    const {
        loading,
        element,
        hasMore,
        error
    } = useSearch("", page, config.episodes)

    const observer = useRef();
    
    const lastNodeRef = useCallback((node) => {
        if (loading) return;
        if (observer.current) {
            observer.current.disconnect()
        }

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevState => prevState + 1)
            }
        })

        if (node) {
            observer.current.observe(node)
        }

    }, [loading, hasMore])

    return (<div className={styles["gridPage-div"]}>
        <h1 className={styles["title"]}>Эпизоды</h1>
        <div className={styles["grid-div"]}>
            {element && element.map((el, index) => {
                if (element.length === index + 1) {
                    return <Link to={String(el.id)} key={el.id} ref={lastNodeRef} className={styles["element-grid-div"]}>
                        <p>{el.name}</p>
                        <p>{el.episode}</p>
                        <p>{el.air_date}</p>
                    </Link>
                }
                return <Link to={String(el.id)} key={el.id} className={styles["element-grid-div"]}>
                    <p>{el.name}</p>
                    <p>{el.episode}</p>
                    <p>{el.air_date}</p>
                </Link>
            })}
        </div>
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
    </div>);
};