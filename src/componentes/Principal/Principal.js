import useLogin from '../../hook/useLogin';
import MiMuro from '../MiMuro/MiMuro';
import SeguirMuro from '../SeguirMuro/SeguirMuro';
import Siguiendo from '../Siguiendo/Siguiendo';

const Principal = () => {
    const {usuario, logout} = useLogin();    

    return(
        <>
            <h1>Bienvenido {usuario} <button className="btn btn-rojo" onClick={logout}>Logout</button></h1>

            <MiMuro />

            <Siguiendo />

            <SeguirMuro />

        </>
    );
}

export default Principal;