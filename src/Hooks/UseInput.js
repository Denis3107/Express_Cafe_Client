import {useState} from "react";
import {useValidation} from "./useValidation";

export const useInput = (initialValue,validations)=>{
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value,validations)

    const onChange = (e) =>{
        setDirty(true)
        setValue(e.target.value)
    }

    const onBlur = () =>{
        setDirty(true)
    }

    const onSubmit = ()=>{
        setValue('')
        setDirty(false)
    }

    return{
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
        onSubmit
    }
}