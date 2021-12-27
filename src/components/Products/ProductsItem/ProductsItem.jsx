import React from 'react';
import "./ProductsItem.css"

const ProductsItem = ({_id,imageUrl,name,price,addCart,countItem}) => {

    function onAdd(){
        addCart({_id, name, price, imageUrl})
    }
    return (
        <div className="ProductsItem">
            <div className="ProductsItem__top">
                <img src={imageUrl} alt={name}/>
                <h3>{name}</h3>
            </div>

            <div className="ProductsItem__bottom">
                <span>{price} грн</span>
                <button onClick={onAdd}>Добавити  {countItem && <i>{countItem}</i>} </button>

            </div>
        </div>
    );
};

export default  React.memo(ProductsItem);