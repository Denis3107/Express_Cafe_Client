import React, {useState} from 'react';
import Modal from "../Modal/Modal";
import {useInput} from "../../../Hooks/UseInput";
import axios from "axios";

const Form = ({ModalActive, typeOrder,type, setActive,cartItems, items,totalCount,totalPrice,clearCart}) => {

    const [sendStatus, setSendStatus] = useState(false)
    const name = useInput('', {isEmpty: true, minLength:3,maxLength:30})
    const phone = useInput('',{isEmpty: true, minLength:13,maxLength:13,phone:false})

    function nullForm(){
        setActive(false)
        name.onSubmit()
        phone.onSubmit()
    }

    function sendForm(e){
        e.preventDefault()
        setSendStatus(true)

        let dispatchObj

        switch (typeOrder){
            case 'message':{
                dispatchObj = {name: name.value, phone: phone.value, type}
                break
            }
            case 'order':{
                let d = new Date()
                let format = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
                    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

                const chek = cartItems.map(item => {
                    return {
                        name: item.name,
                        count: items[item._id].items.length,
                        price:items[item._id].totalPrice
                    }
                })

                dispatchObj = { product : chek, totalCount,totalPrice, name: name.value,phone: phone.value, date: format}
                clearCart()
                break
            }
        }

        axios.post(`http://localhost:3001/${typeOrder}`,dispatchObj).then(()=>{
            setTimeout(()=>{
                nullForm()
                setTimeout(()=>{
                    setSendStatus(false)
                },500)
            }, 5000)
        })
    }

    return (
        <Modal active={ModalActive} setActive={nullForm}>
            {!sendStatus ?<form className="Modal_Form" onSubmit={sendForm}>
                <h1>{type}</h1>

                {(name.isDirty && name.isEmpty) && <div style = {{color: "red"}}>Поле не може бути пустим</div>}
                {(name.isDirty && name.minLengthError) && <div style = {{color: "red"}}>Ім'я дуже коротке</div>}
                {(name.isDirty && name.maxLengthError) && <div style = {{color: "red"}}>Ім'я дуже довге</div>}
                <input type="text" placeholder={"Введіть Ім'я"} name="name" value={name.value} onChange={name.onChange} onBlur={name.onBlur}/>

                {(phone.isDirty && phone.isEmpty) && <div style = {{color: "red"}}>Поле не може бути пустим</div>}
                {(phone.isDirty && phone.minLengthError) && <div style = {{color: "red"}}>Телефон дуже коротке</div>}
                {(phone.isDirty && phone.maxLengthError) && <div style = {{color: "red"}}>Телефон дуже довгий</div>}
                {(phone.isDirty && phone.isPhone) && <div style = {{color: "red"}}>Невірно введений номер</div>}
                <input type="text" placeholder={"+380970861091"} name="phone" value={phone.value.length === 1 ? "+38" + phone.value: phone.value} onChange={phone.onChange} onBlur={phone.onBlur}/>

                <button type="submit" disabled={!name.inputValid || !phone.inputValid} >Відправити</button>
            </form> : <h1 style={{margin:"40px",textAlign: "center"}}>Дякуємо за замовлення, наші співробітники звяжуться з вами</h1> }
        </Modal>
    );
};

export default Form;