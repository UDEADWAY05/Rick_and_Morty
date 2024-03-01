import React from "react";
import rick from "../../assets/img/pickle-rick.png"
import "./error.scss"

export const ErrorPage = () => {
    return (
        <div className="error-div">
            <img alt="Рик" className="error-img" src={rick} />
            <h1 className="error-title">Что-то пошло не так!</h1>
            <p className="error-description">
                — Произошла ошибка пожалуйста передите на другую вкладку!
                Наши програмисты уже решают проблему.
            </p>
        </div>
    );
};