import React, { useState } from "react";
import rick from "../../assets/img/rick-sanchez.svg"
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import logOutIcon from "../../assets/img/logOut-icon.svg"
import { useNavigate } from "react-router-dom"
import close from "../../assets/img/close.svg"
import menu from "../../assets/img/menu.svg"
import styles from "./NavBar.module.scss"

export const NavBar = () => {
    const { user, signOut } = useAuth()
    const [toggle, setToggle] = useState(false)
    const activeLink = styles["nav-list-link--active"]
    const normalLink = styles["nav-list-link"]
    const navigate = useNavigate();

    const handleClick = () => {
        if (signOut) {
            signOut(() => {
                navigate("/", {
                    replace: true,
                })
            })
        }
    }

    return (<div className={styles["NavBar"]}>
            
        <NavLink to="/" className={styles["NavBar-left"]} >
            <img alt="Сдесь должен быть Рик" src={rick} className={styles["rick-img"]} />
            <h1 className={styles["link"]}>Rick and Morty</h1>
        </NavLink>
        <div className={styles["NavBar-right"]}>
            <div className={styles["NavBar-right-big"]}>
                <NavLink to="/episodes" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Эпизоды</NavLink>
                <NavLink to="/locations" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Локации</NavLink>
                <NavLink to="/characters" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Персонажи</NavLink>
                {user !== null
                    ? <div className={styles["nav-list-login"]}>
                        <h2 className={styles["user-title"]}>{user.login}</h2>
                        <img className={styles["NavBar-icon"]} alt="выход" onClick={handleClick} src={logOutIcon}></img>
                    </div>
                    : <NavLink to="/login" className={({ isActive }) => (isActive ? activeLink : normalLink)}><h2 className={styles["user-title-link"]}>Войти</h2></NavLink>
                }
            </div>
            <div className={styles["NavBar-right-small"]}>
                <img
                    src={toggle ? close : menu}
                    alt='menu'
                    className={styles["menu-img"]}
                    onClick={() => setToggle(!toggle)}
                />

                <div className={!toggle ? styles[`menu-selection-hidden`] : styles[`menu-selection-flex`]}>
                    <ul className='menu-selection-list'>
                        <NavLink to="/episodes" className={styles["menu-selection-link"]} onClick={() => setToggle(prevState => !prevState)}>Эпизоды</NavLink>
                        <NavLink to="/locations" className={styles["menu-selection-link"]} onClick={() => setToggle(prevState => !prevState)}>Локации</NavLink>
                        <NavLink to="/characters" className={styles["menu-selection-link"]} onClick={() => setToggle(prevState => !prevState)}>Персонажи</NavLink>
                        <div className={styles["menu-selection-link"]}>
                            {user !== null
                                ? <h2 className={styles["user-title-link"]} onClick={() => {
                                    handleClick()
                                    setToggle(prevState => !prevState)
                                }} >Выйти</h2>
                                : <NavLink to="/login" className={styles["user-title"]} onClick={() => setToggle(prevState => !prevState)}><h2 className={styles["user-title-link"]}>Войти</h2></NavLink>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>);
};