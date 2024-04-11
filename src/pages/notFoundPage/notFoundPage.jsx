import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import styles from "./NotFound.module.scss"

const NotFoundPage = () => {
    const navigate = useNavigate()
    const [redirectTimer, setRedirectTimer] = useState(3)
 
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
        const interval = setInterval(() => {
            setRedirectTimer(prevState => prevState - 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (<div className={styles["notFound-div"]}>
        <p className={styles["notFound-title"]}>404</p>
        <p className={styles["notFound-description"]}>Страница не найдена. Вы будете перенаправлены через {redirectTimer}...</p>
    </div>);
};

export default NotFoundPage;