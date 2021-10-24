import { Redirect, Route } from 'react-router';
import useLogin from '../hook/useLogin';

const RouterProtegido = ({children, ...resto}) => {
    const {usuario} = useLogin();

    return (
        <Route {...resto} render={() => usuario ? (children) : <Redirect to="/login" />}  />
    );
}

export default RouterProtegido;