import React, {useState} from 'react';
import "./Main.css"
import Form from "../Other/Form/Form";

const Main = (props) => {
    const [ModalActive, setActive] = useState(false)
    const [type,setType] = useState()

    function order(e){
        setActive(true)
        setType({type:e.target.value, typeOrder: 'message'})
    }

    return (
        <div className="Main">
            <div className="Main__Info">
                <h1>EXPRESS</h1>
                <h3>Молодіжнний кафе в якому сподобається всім</h3>
            </div>
            <div className="Main__services">
                <button onClick={order} value={"Забронювати стіл"}>Забронювати стіл</button>
                <button onClick={order} value={"Замовити Банкет"}>Замовити Банкет</button>
            </div>
            <Form ModalActive = {ModalActive} {...type} setActive={setActive}/>
        </div>
    );
};

export default Main;