import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    return [ values, handleInputChange, reset ];
}