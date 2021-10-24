import { useState } from 'react'

const useForm = inicial => {
    const [formulario, setFormulario] = useState(inicial);

    const onChange = ({target}) => {
        const {name, value} = target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    const limpiar = () => {
        setFormulario(inicial);
    }

    return [formulario, onChange, limpiar];

}

export default useForm;