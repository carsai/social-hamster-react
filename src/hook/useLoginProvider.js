import { useState } from 'react';

const useLoginProvider = () => {
    const [usuario, setUsuario] = useState(localStorage.getItem('nombre-hamster'));

    const login = nombre => {
        setUsuario(nombre);
        localStorage.setItem('nombre-hamster', nombre);
    }

    const logout = () => {
        setUsuario(null);
        localStorage.clear();
    }

    return {usuario, login, logout};

}

export default useLoginProvider;