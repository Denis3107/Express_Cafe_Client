import React from 'react';
import "./CartItem.css"
import {removeItemAction} from "../../../Redux/Reducers/cartReducer";

const CartItem = ({_id,imageUrl,name,price,totalPrice,totalCount,removeItemAction,plusItemAction,minusItemAction}) => {
    return (
        <div className="CartItem">
            <div className="CartItem__product">
                <img  src={imageUrl}/>
                <span>{name}</span>
            </div>

            <div className="CartItem__number">
                <button onClick={()=>minusItemAction(_id)}>➖</button>
                <span>{totalCount}</span>
                <button onClick={()=>plusItemAction(_id)}>➕</button>

            </div>
            <span>{totalPrice} грн</span>
            <button className="CartItem__deleteItem" onClick={()=>removeItemAction(_id)}>✖️</button>
            <button className="CartItem__delete" onClick={()=>removeItemAction(_id)}>Видалити товар</button>
        </div>
    );
};

export default  React.memo(CartItem);