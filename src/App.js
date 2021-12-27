import Header from "./components/Header/Header";
import './App.css'
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Сontacts/Сontacts";
import Products from "./components/Products/Products";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";
import {connect} from "react-redux";
import {setCategoryAction, setSortAction} from "./Redux/Reducers/sortReducer";
import {getProductThank} from "./Redux/Reducers/productsReducer";
import {
    actionAdd,
    actionClearCart,
    minusItemAction,
    plusItemAction,
    removeItemAction
} from "./Redux/Reducers/cartReducer";

function App(props) {
    return (
        <div className="App">
            <Header count={props.cart.totalCount}/>
            <Routes>
                <Route path="/" element={<Main/>} exact/>
                <Route path="/Gallery" element={<Gallery/>} exact/>
                <Route path="/Menu" element={<Menu/>} exact/>
                <Route path="/Products" element={<Products {...props} {...props.products}/>} exact/>
                <Route path="/Contacts" element={<Contacts/>} exact/>
                <Route path="/Cart" element={<Cart {...props} {...props.cart}/>} exact/>
            </Routes>
            <Footer/>
        </div>
    );
}

let mapStateToProps = (state) => ({
    sortR: state.sort,
    products: state.products,
    cart: state.cart
})

export default connect(mapStateToProps, {
    setSortAction,
    setCategoryAction,
    getProductThank,
    actionAdd,
    actionClearCart,
    removeItemAction,
    plusItemAction,
    minusItemAction
})(App);




