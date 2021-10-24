const urlBase = process.env.REACT_APP_URLBASE;

const apiConsultaUsuario = process.env.REACT_APP_APICONSULTAUSUARIO;
const apiCrearUsuario = process.env.REACT_APP_APICREARUSUARIO;

const apiConsultaMuro = process.env.REACT_APP_APICONSULTAMURO;
const apiAltaMuro = process.env.REACT_APP_APIALTAMURO;
const apiMuroSeguir = process.env.REACT_APP_APIMUROSEGUIR;

const apiConsultaSeguir = process.env.REACT_APP_APICONSULTASEGUIR;
const apiAltaSeguir = process.env.REACT_APP_APIALTASEGUIR;
const apiEliminarSeguir = process.env.REACT_APP_APIELIMINARSEGUIR;

const llamada = (url, metodo, datos) => fetch(url, {
    method: metodo,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
});

const existeUsuarioAPI = async usuario => {
    const resultado = await llamada(`${urlBase}${apiConsultaUsuario}`, 'POST', {usuario});
    const {ok} = await resultado.json();

    return ok;
}

const crearUsuarioApi = async usuario => {
    const resultado = await llamada(`${urlBase}${apiCrearUsuario}`, 'POST', {usuario});
    const {ok} = await resultado.json();

    return ok;
}

const consultaMuroApi = async usuario => {
    const resultado = await llamada(`${urlBase}${apiConsultaMuro}`, 'POST', {usuario});
    const {muro} = await resultado.json();

    return muro;
}

const altaMuroApi = async (usuario, mensaje) => {
    const resultado = await llamada(`${urlBase}${apiAltaMuro}`, 'PUT', {usuario, mensaje});

    const {ok} = await resultado.json();

    return ok;
}

const consultaMuroSeguirAPI = async usuario => {
    const resultado = await llamada(`${urlBase}${apiMuroSeguir}`, 'POST', {usuario});
    const {muro} = await resultado.json();

    return muro;
}

const consultaSeguirApi = async usuario => {
    const resultado = await llamada(`${urlBase}${apiConsultaSeguir}`, 'POST', {usuario});
    const {siguiendo} = await resultado.json();

    return siguiendo;
}

const eliminarSeguirApi = async (usuario, usuSeguir) => {
    const resultado = await llamada(`${urlBase}${apiEliminarSeguir}`, 'DELETE', {usuario, usuSeguir});
    const {ok} = await resultado.json();

    return ok;
}

const altaSeguirApi = async (usuario, usuSeguir) => {
    const resultado = await llamada(`${urlBase}${apiAltaSeguir}`, 'PUT', {usuario, usuSeguir});
    const resultadoJ = await resultado.json();

    return resultadoJ;
}

export {
    existeUsuarioAPI,
    crearUsuarioApi,
    consultaMuroApi,
    altaMuroApi,
    consultaMuroSeguirAPI,
    consultaSeguirApi,
    eliminarSeguirApi,
    altaSeguirApi
}