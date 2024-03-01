import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import config from "../../config.json";

export const LocationsPage = () => {
    const [page, setPage] = useState(1)
    const {
        loading,
        element,
        hasMore,
        error
    } = useSearch("", page, config.locations)

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

    return (<div className="gridPage-div">
        <h1 className="title">Локации</h1>
        <div className="grid-div">
            {element && element.map((el, index) => {
                if (element.length === index + 1) {
                    return <Link to={String(el.id)} key={el.id} ref={lastNodeRef} className="element-grid-div">
                        <p>{el.type}</p>
                        <p>{el.name}</p>
                        <p>{el.dimension}</p>
                    </Link>
                }
                return <Link to={String(el.id)} key={el.id} className="element-grid-div">
                    <p>{el.name}</p>
                    <p>{el.type}</p>
                    <p>{el.dimension}</p>
                </Link>
            })}
        </div>
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
    </div>);
};