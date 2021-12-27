import React from 'react';
import "./BurgerMenu.css"
import close from "../../../img/icon/close.png"
import {NavLink} from "react-router-dom";

const BurgerMenu = ({activeMenu, setActive}) => {
    return (
        <div className= {activeMenu ? "BurgerMenu active" : "BurgerMenu" }>
                <div className="BurgerMenu__header">
                    <h1>EXPRESS</h1>
                    <img src={close} alt="" onClick={() => setActive(false)}/>
                </div>

            <div className="BurgerMenu__links" onClick={() => setActive(false)}>
                <NavLink to={"/"} ><li>На Головну</li></NavLink>
                <NavLink to={"/Gallery"} ><li>Галерея</li></NavLink>
                <NavLink to={"/Menu"}><li>Меню</li></NavLink>
                <NavLink to={"/Products"}><li>Товари</li></NavLink>
                <NavLink to={"/Contacts"}><li>Контакти</li></NavLink>
            </div>
        </div>
    );
};

export default BurgerMenu;