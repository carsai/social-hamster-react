import { useEffect } from 'react';
import useLogin from '../../hook/useLogin';
import useSocial from '../../hook/useSocial';
import TextoMuro from '../TextoMuro/TextoMuro';

const SeguirMuro = () => {
    const {usuario} = useLogin();

    const {muroSeguir, actualizarMuroSeguir} = useSocial();

    // eslint-disable-next-line
    useEffect(() => actualizarMuroSeguir(usuario), []);

    return(
        <div className="mimuro derecho">
            <h2>Muro de los que sigo</h2>            
            {
                (muroSeguir.length > 0) 
                ?
                    <ul>
                        {muroSeguir.map(datos => <TextoMuro key={datos.id} datos={datos} mostrarFecha={true} />)}
                    </ul>
                :
                    <span>No sigues a nadie</span>
            }
        </div>
    );
}

export default SeguirMuro;