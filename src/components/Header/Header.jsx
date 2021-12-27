import "./Header.css"
import cart from "../../img/icon/shopping-bag_icon-icons.com_69305.png"
import {NavLink} from "react-router-dom";
import menu from "../../img/icon/burger.png"
import BurgerMenu from "../Other/BurgerMenu/BurgerMenu";
import {useState} from "react";

const Header = ({count}) => {

    const [activeMenu, setActive] = useState(false)

    return (
        <div className="Header">
            <BurgerMenu activeMenu = {activeMenu} setActive ={setActive}/>
            <div className="Header__Burger" onClick={() => setActive(true)}>
                <img src={menu} alt=""/>
            </div>
            <NavLink to={'/'}><div className="Header__Logo">EXPRESS</div></NavLink>
            <div className="Header__link">
                <NavLink to={"/Gallery"} ><li>Галерея</li></NavLink>
                <NavLink to={"/Menu"}><li>Меню</li></NavLink>
                <NavLink to={"/Products"}><li>Товари</li></NavLink>
                <NavLink to={"/Contacts"}><li>Контакти</li></NavLink>
            </div>
            <NavLink to={"/Cart"}>
                <div className="Header__cart">
                    <img src={cart}/>
                    {
                        count > 0 && <span>{count}</span>
                    }
                </div>
            </NavLink>
        </div>
    )
}

export default Header