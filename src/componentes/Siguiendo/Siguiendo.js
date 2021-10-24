import { useEffect } from 'react';
import useForm from '../../hook/useForm';
import useLogin from '../../hook/useLogin';
import useSocial from '../../hook/useSocial';

const Siguiendo = () => {
    const {usuario} = useLogin();

    const {seguidos, actualizarSeguidos, eliminarSeguidos, altaSeguidos} = useSocial();

    // eslint-disable-next-line
    useEffect(() => actualizarSeguidos(usuario), []);

    const [formulario, onChange, limpiar] = useForm({
        paraSeguir: ''
    });

    const {paraSeguir} = formulario;

    const onSubmit = async e => {
        e.preventDefault();
        await altaSeguidos(usuario, paraSeguir);
        limpiar();
    }

    const eliminarSeguir = nombre => {
        eliminarSeguidos(usuario, nombre);
    }

    return(
        <div className="mimuro izquierdo" style={{marginRight: '10px'}}>
            <h2>Siguiendo</h2>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" name="paraSeguir" id="paraSeguir" placeholder="nombre de usuario a seguir" value={paraSeguir} />
                <button className="btn btn-azul" type="submit">Añadir</button>
            </form>
            {
               seguidos.map(datos => <p key={datos.id}>{datos.nombre} <button className="btn btn-rojo" key={datos.id} onClick={()=> eliminarSeguir(datos.nombre)}>Eliminar</button></p>) 
            }
        </div>
    );
}

export default Siguiendo;