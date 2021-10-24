import { useEffect } from 'react';

import useForm from '../../hook/useForm';
import useLogin from '../../hook/useLogin';
import useSocial from '../../hook/useSocial';
import TextoMuro from '../TextoMuro/TextoMuro';

const MiMuro = () => {

    const {usuario} = useLogin();

    const [formulario, onChange, limpiar] = useForm({
        mensaje: ''
    });

    const {miMuro, actualizarMuro, altaMuro} = useSocial();

    // eslint-disable-next-line
    useEffect(() => actualizarMuro(usuario), []);

    const formAltaMuro =  async e => {
        e.preventDefault();
        await altaMuro(usuario, formulario.mensaje);
        actualizarMuro(usuario);
        limpiar();
    }

    return(
        <div className="mimuro" style={{marginBottom: '20px'}}>
            
            <h2>Mi muro</h2>            

            <ul>
            {
                miMuro.map(datos => <TextoMuro key={datos.id} datos={datos} mostrarFecha={false} />)
            }
            </ul>

            <form onSubmit={formAltaMuro}>
                <input type="text" name="mensaje" id="mensaje" placeholder="Introduzca un mensaje" onChange={onChange} value={formulario.mensaje} />
                <button className="btn btn-azul" type="submit">Añadir</button>
            </form>

        </div>
    );
}

export default MiMuro;