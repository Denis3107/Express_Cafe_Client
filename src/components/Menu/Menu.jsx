import React, {useEffect, useState} from 'react';
import "./Menu.css"
import getMenu from "../../API/getMenu";
import Slider from "../Other/Slider/Slider";

const Menu = () => {

    const [menu, setMenu] = useState([])

    useEffect(()=>{
        getMenu().then(res => setMenu(res.data))
    }, [])

    return (
        <div className="Menu">
            {
                menu.map((item, index) =>(<Slider key={`${item}_${index}`} slides = {item} />))
            }
        </div>
    );
};

export default Menu;