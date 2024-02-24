import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import config from "../../config.json";

const CharactersPage = () => {
    const [page, setPage] = useState(1)    
    const {
        loading,
        element,
        hasMore,
        error
    } = useSearch("", page, config.characters)

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
        <h1 className="title">Персонажи</h1>
        <div className="grid-div">
            {element && element.map((el, index) => {
                if (element.length === index + 1) {
                    return <Link to={String(el.id)} key={el.id} ref={lastNodeRef} className="element-grid-div">
                        <img className="characters-img" src={el.image}></img>
                        <p>{el.name}</p>
                        <p>{el.species}</p>
                    </Link>
                }
                return <Link to={String(el.id)} key={el.id} className="element-grid-div">
                    <img className="characters-img" src={el.image}></img>
                    <h3>{el.name}</h3>
                    <p>{el.species}</p>
                </Link>
            })}
        </div>
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
    </div>);
}
 
export default CharactersPage;