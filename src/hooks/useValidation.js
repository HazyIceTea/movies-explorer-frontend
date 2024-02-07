import { useCallback, useState } from "react";

export default function useValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);


    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        const validationMessage = evt.target.validationMessage;
        const form = evt.target.form;
        setValues((oldValues) => {
            return { ...oldValues, [name]: value }
        })
        setErrors(oldErrors => {
            return { ...oldErrors, [name]: validationMessage }
        });
        setIsFormValid(form.checkValidity())
    }

    const reset = useCallback((data = {}) => {
        setValues(data);
        setErrors({});
        setIsFormValid(false);
    },[])

    return { values, errors, isFormValid, handleChange, reset }
}