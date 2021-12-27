import React, {useState} from 'react';
import "./Cart.css"
import cartIcon from "../../img/icon/icons8-fast-cart-60.png"
import CartItem from "./CartItem/CartItem";
import {NavLink} from "react-router-dom";
import Form from "../Other/Form/Form";

const Cart = ({cart,actionClearCart,removeItemAction,plusItemAction,minusItemAction,items, totalCount,totalPrice}) => {
    const [ModalActive, setActive] = useState(false)
    const [type,setType] = useState()


    function order(e){
        setActive(true)
        setType({type:e.target.value, typeOrder: 'order'})
    }

    const cartItems = Object.keys(items).map(key => {
        return {...items[key].items[0]}
    })


    return (
        <div className="Cart">
            {totalCount == 0 ?  <div className="Cart_Empty">
                <h2>Корзина порожня </h2>
                <NavLink to="/Products">
                    <button>До покупок</button>
                </NavLink>
            </div>:<div className="Cart__content">
                <div className="content-top">
                    <div className="top__title">
                        <img src={cartIcon} alt=""/>
                        <span>Корзина</span>
                    </div>
                    <button className="top__clearCart" onClick={actionClearCart}>Очистити Корзину</button>
                </div>
                <div className="content-cart">
                    {
                        cartItems.map(item => <CartItem key = {item._id} {...item} totalPrice={items[item._id].totalPrice}
                                                   totalCount={items[item._id].items.length}
                                                   removeItemAction = {removeItemAction}
                                                   plusItemAction = {plusItemAction}
                                                   minusItemAction = {minusItemAction}/>)
                    }
                </div>
                <div className="content-info">
                    <span>Всього товару: {totalCount}</span>
                    <span>Сума : {totalPrice} грн</span>
                </div>
                <div className="content-bottom">
                    <NavLink to="/Products">
                        <button className="bottom-go">До покпок</button>
                    </NavLink>
                    <button className="bottom-order" onClick={order} value="Оформлення замовлення">Оформити замовлення</button>
                </div>
            </div>}
            <Form ModalActive = {ModalActive} {...type} setActive={setActive} {...cart} clearCart = {actionClearCart} cartItems = {cartItems}/>
        </div>
    );
};

export default  React.memo(Cart);