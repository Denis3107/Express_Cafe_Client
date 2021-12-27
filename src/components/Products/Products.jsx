import React, {useEffect, useState} from 'react';
import "./Products.css"
import ProductsItem from "./ProductsItem/ProductsItem";
import Categories from "./TopElements/Categories";
import PopUp from "./TopElements/PopUp";
import loader from "../../img/svg/Spinner-1s-200px.svg"
import getCategory from "../../API/getCategory";


const Products = ({setSortAction, setCategoryAction, getProductThank, sortR, actionAdd, cart, items, isLoaded}) => {
    const [category, setCategory] = useState([])
    const sort = [{name: "Спочатку дешеві", type: "price", order: "+"}, {name: "Спочатку дорогі", type: "price", order: "-"}]

    useEffect(() => {
        getProductThank(sortR)
    }, [sortR])

    useEffect(() => {
        getCategory().then(data => setCategory(data))
    }, [])


    return (
        <div className="Products">

            {
                category.length === 0 ?
                    <img className="loader" src={loader} alt=""/> : <>
                        <div className="Products__contentTop">
                            <Categories items={category} setCategoryAction={setCategoryAction} {...sortR}/>
                            <PopUp items={sort} setSortAction={setSortAction} {...sortR}/>
                        </div>

                        {
                            items.length === 0 && isLoaded  ? <h1>На даний момент товару немає в наявності</h1> :
                                <div className="Products_Items">
                                    {
                                        isLoaded ? items.map(item => <ProductsItem {...item} key={item._id} addCart={actionAdd}
                                                                                   countItem={cart.items[item._id] && cart.items[item._id].items.length}/>) :
                                            <img className="loader" src={loader} alt=""/>
                                    }
                                </div>
                        }
                    </>
            }


        </div>
    );
};

export default React.memo(Products);