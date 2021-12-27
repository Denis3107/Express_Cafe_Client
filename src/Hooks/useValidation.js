import {useEffect, useState} from "react";

export const useValidation = (value,validations) =>{
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [isPhone, setPhoneError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(()=>{
        for (const validation in validations) {
            switch (validation){
                case 'minLength':{
                    value.length < validations[validation] ? setMinLengthError(true):setMinLengthError(false)
                    break;
                } case 'maxLength':{
                    value.length > validations[validation] ? setMaxLengthError(true):setMaxLengthError(false)
                    break;
                }case 'isEmpty':{
                    value ? setEmpty(false):setEmpty(true)
                    break;
                }case 'phone':{
                let re = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
                setPhoneError(!re.test(value))
                    break;
                }
            }
        }
    }, [value])

    useEffect(()=>{
        if(isEmpty || minLengthError || maxLengthError || isPhone){
            setInputValid(false)
        }else {
            setInputValid(true)
        }
    },[isEmpty,minLengthError,maxLengthError,isPhone])

    return{
        isEmpty,
        minLengthError,
        inputValid,
        maxLengthError,
        isPhone
    }
}