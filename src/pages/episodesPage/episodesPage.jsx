import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import config from "../../config.json";
import styles from "./Episodes.module.scss";
import { useLastNode } from "../../hooks/useLastNode";

const INITIAL_PAGE = 1

export const EpisodesPage = () => {
    const [page, setPage] = useState(INITIAL_PAGE)
    const {
        loading,
        element,
        hasMore,
        error
    } = useSearch("", page, config.episodes)

    const lastNodeRef = useLastNode(loading, hasMore, setPage)

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