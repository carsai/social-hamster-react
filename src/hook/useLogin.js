import { useContext } from 'react'
import LoginContext from '../context/LoginContext'

const useLogin = () => useContext(LoginContext);

export default useLogin;