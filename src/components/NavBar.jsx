import React from "react";
import rick from "../assets/img/rick-sanchez.svg"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const activeLink = "nav-list__link nav-list__link--active"
    const normalLink = "nav-list__link"

    return (<div className="NavBar">
        <div className="NavBar-left">
            <img src={rick} className="rick-img" />
            <NavLink to="/" className="NavLink" ><h1>Rick and Morty</h1></NavLink>
        </div>
        <div className="NavBar-right">
            <NavLink to="/episodes" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Эпизоды</NavLink>
            <NavLink to="/locations" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Локации</NavLink>
            <NavLink to="/characters" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Персонажи</NavLink>
        </div>
    </div> );
}
 
export default NavBar;