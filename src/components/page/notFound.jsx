import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
    const navigate = useNavigate()
    const [number, setNumber] = useState(3)
 
    useEffect(() => { 
        setTimeout(() => {
            navigate('/')
        }, 3000)
        const interval = setInterval(() => {
            setNumber(prevState => prevState - 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (<div className="notFound-div">
        <h1 className="notFound-title">404</h1>
        <p className="notFound-description">Страница не найдена. Вы будете перенаправлены через {number}...</p>
    </div>);
}
 
export default NotFoundPage;