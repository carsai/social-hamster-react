import { useState } from 'react';
import { altaMuroApi, consultaMuroApi, consultaMuroSeguirAPI, consultaSeguirApi, eliminarSeguirApi, altaSeguirApi } from '../accion/llamarApis';

const useMuroProvider = () => {
    // PARTE DE MI MURO
    const [miMuro, setMiMuro] = useState([]);

    const actualizarMuro = async usuario => {
        const resultado = await consultaMuroApi(usuario);
        setMiMuro(resultado);
    }

    const altaMuro = async (usuario, mensaje) => {
        return await altaMuroApi(usuario, mensaje);
    }

    // PARTE DEL MURO SEGUIDO
    const [muroSeguir, setMuroSeguir] = useState([]);

    const actualizarMuroSeguir = async usuario => {
        const resultado = await consultaMuroSeguirAPI(usuario);
        setMuroSeguir(resultado);
    }

    // PARTE DE SEGUIDOS
    const [seguidos, setSeguidos] = useState([]);

    const actualizarSeguidos = async usuario => {
        const resultado = await consultaSeguirApi(usuario);
        setSeguidos(resultado);
    }

    const eliminarSeguidos = async (usuario, usuSeguir) => {
        const resultado = await eliminarSeguirApi(usuario, usuSeguir);

        if(resultado) {
            actualizarSeguidos(usuario);
            actualizarMuroSeguir(usuario);
        }
    }

    const altaSeguidos = async (usuario, usuSeguir) => {
        const resultado = await altaSeguirApi(usuario, usuSeguir);

        if(resultado.ok) {
            actualizarSeguidos(usuario);
            actualizarMuroSeguir(usuario);
        } else {
            alert(resultado.error);
        }
    }

    return {miMuro, actualizarMuro, altaMuro, muroSeguir, actualizarMuroSeguir, seguidos, actualizarSeguidos, eliminarSeguidos, altaSeguidos};
}

export default useMuroProvider;