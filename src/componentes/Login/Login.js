import { useHistory } from 'react-router';
import { crearUsuarioApi, existeUsuarioAPI } from '../../accion/llamarApis';
import useForm from '../../hook/useForm';
import useLogin from '../../hook/useLogin';

const Login = () => {

    const [loginForm, setLoginForm] = useForm({nombre: ''});

    const {nombre} = loginForm;

    const {login} = useLogin();

    const history = useHistory();

    const onSubmit = async e => {
        e.preventDefault();

        if (await existeUsuarioAPI(nombre)) {
            login(nombre);
            history.replace("/");
        } else {
            alert('El usuario no existe');
        }
    }

    const crearUsuario = async e => {
        e.preventDefault();

        if (await existeUsuarioAPI(nombre)) {
            alert('El usuario ya existe');
        } else {
            if(await crearUsuarioApi(nombre)){
                login(nombre);
                history.replace("/");
            }            
        }
    }

    return(
        <div className="mimuro">
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="nombre">Nombre </label>
                <input type="text" name="nombre" id="nombre" value={nombre} onChange={setLoginForm} />
                <button className="btn btn-azul" type="submit">Login</button>
                <button className="btn btn-verde" onClick={crearUsuario}>Crear</button>
            </form>
        </div>
    );
}

export default Login;