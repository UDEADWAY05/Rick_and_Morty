import React from "react";
import rick from "../../assets/img/rick-sanchez.svg"
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import logOutIcon from "../../assets/img/logOut-icon.svg"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const {user, signOut} = useAuth()
    const activeLink = "nav-list__link nav-list__link--active"
    const normalLink = "nav-list__link"
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
        <div className="NavBar-left">
            <img alt="Сдесь должен быть Рик" src={rick} className="rick-img" />
            <NavLink to="/" className="link" ><h1>Rick and Morty</h1></NavLink>
        </div>
        <div className="NavBar-right">
            <NavLink to="/episodes" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Эпизоды</NavLink>
            <NavLink to="/locations" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Локации</NavLink>
            <NavLink to="/characters" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Персонажи</NavLink>
            {user !== null
                ? <div className="nav-list__login">
                    <h2 className="user-title">{user.login}</h2>
                    <img className="NavBar-Icon" alt="выход" onClick={handleClick} src={logOutIcon}></img>
                </div>
                : <NavLink to="/login" className={({ isActive }) => (isActive ? activeLink : normalLink)}><h2 className="user-title">Войти</h2></NavLink>
            }
        </div>
    </div> );
}
 
export default NavBar;