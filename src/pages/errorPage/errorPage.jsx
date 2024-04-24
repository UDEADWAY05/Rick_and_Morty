import React from "react";
import rick from "../../assets/img/pickle-rick.png"
import styles from "./Error.module.scss"

export const ErrorPage = () => {
    return (
        <div className={styles["error-div"]}>
            <img alt="Рик" className={styles["error-img"]} src={rick} />
            <h1 className={styles["error-title"]}>Что-то пошло не так!</h1>
            <p className={styles["error-description"]}>
                — Произошла ошибка пожалуйста передите на другую вкладку!
                Наши програмисты уже решают проблему.
            </p>
        </div>
    );
};