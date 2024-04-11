import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import config from "../../config.json";
import styles from "./Characters.module.scss"
import { useLastNode } from "../../hooks/useLastNode";

const INITIAL_PAGE = 1

export const CharactersPage = () => {
    const [page, setPage] = useState(INITIAL_PAGE)    
    const {
        loading,
        element,
        hasMore,
        error
    } = useSearch("", page, config.characters)

    const lastNodeRef = useLastNode(loading, hasMore, setPage)

    return (<div className={styles["gridPage-div"]}>
        <h1 className={styles["title"]}>Персонажи</h1>
        <div className={styles["grid-div"]}>
            {element && element.map((el, index) => {
                if (element.length === index + 1) {
                    return <Link to={String(el.id)} key={el.id} ref={lastNodeRef} className={styles["characters-grid-div"]}>
                        <img alt={el.name} className={styles["characters-img"]} src={el.image}></img>
                        <div className={styles["characters-about"]}>
                            <h3 className={styles["characters-about-title"]}>{el.name}</h3>
                            <p className={styles["characters-about-subtitle"]}>{el.species}</p>
                        </div>
                    </Link>
                }
                return <Link to={String(el.id)} key={el.id} className={styles["characters-grid-div"]}>
                    <img alt={el.name} className={styles["characters-img"]} src={el.image}></img>
                    <div className={styles["characters-about"]}>
                        <h3 className={styles["characters-about-title"]}>{el.name}</h3>
                        <p className={styles["characters-about-subtitle"]}>{el.species}</p>
                    </div>
                </Link>
            })}
        </div>
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
    </div>);
}