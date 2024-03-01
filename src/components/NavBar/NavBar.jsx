import React, { useState } from "react";
import rick from "../../assets/img/rick-sanchez.svg"
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import logOutIcon from "../../assets/img/logOut-icon.svg"
import { useNavigate } from "react-router-dom"
import close from "../../assets/img/close.svg"
import menu from "../../assets/img/menu.svg"
import "./navBar.scss"

export const NavBar = () => {
    const { user, signOut } = useAuth()
    const [toggle, setToggle] = useState(false)
    const activeLink = "nav-list-link nav-list-link--active"
    const normalLink = "nav-list-link"
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

    return (<div className="NavBar">
            
        <NavLink to="/" className="link NavBar-left" >
            <img alt="Сдесь должен быть Рик" src={rick} className="rick-img" />
            <h1>Rick and Morty</h1>
        </NavLink>
        <div className="NavBar-right">
            <div className="NavBar-right-big">
                <NavLink to="/episodes" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Эпизоды</NavLink>
                <NavLink to="/locations" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Локации</NavLink>
                <NavLink to="/characters" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Персонажи</NavLink>
                {user !== null
                    ? <div className="nav-list-login">
                        <h2 className="user-title">{user.login}</h2>
                        <img className="NavBar-Icon" alt="выход" onClick={handleClick} src={logOutIcon}></img>
                    </div>
                    : <NavLink to="/login" className={({ isActive }) => (isActive ? activeLink : normalLink)}><h2 className="user-title-link">Войти</h2></NavLink>
                }
            </div>
            <div className="NavBar-right-small">
                <img
                    src={toggle ? close : menu}
                    alt='menu'
                    className="menu-img"
                    onClick={() => setToggle(!toggle)}
                />

                <div className={`menu-selection-${!toggle ? 'hidden' : 'flex'}`}>
                    <ul className='menu-selection-list'>
                        <NavLink to="/episodes" className={normalLink} onClick={() => setToggle(prevState => !prevState)}>Эпизоды</NavLink>
                        <NavLink to="/locations" className={normalLink} onClick={() => setToggle(prevState => !prevState)}>Локации</NavLink>
                        <NavLink to="/characters" className={normalLink} onClick={() => setToggle(prevState => !prevState)}>Персонажи</NavLink>
                        {user !== null
                            ? <h2 className="user-title" onClick={() => {
                                handleClick()
                                setToggle(prevState => !prevState)
                            }} >Выйти</h2>
                            : <NavLink to="/login" className={normalLink} onClick={() => setToggle(prevState => !prevState)}><h2 className="user-title-link">Войти</h2></NavLink>
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>);
};