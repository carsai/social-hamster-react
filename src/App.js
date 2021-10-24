import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './componentes/Login/Login';
import Principal from './componentes/Principal/Principal';
import LoginContext from './context/LoginContext';
import SocialContext from './context/SocialContext';
import useLoginProvider from './hook/useLoginProvider';
import useMuroProvider from './hook/useMuroProvider';
import RouterProtegido from './router/RouterProtegido';

function App() {
  const loginProvide = useLoginProvider();
  const muroProvide = useMuroProvider();

  return (
    <LoginContext.Provider value={loginProvide}>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <RouterProtegido>
              <SocialContext.Provider value={muroProvide}>
                <Principal />
              </SocialContext.Provider>
            </RouterProtegido>
          </Route>
        </Switch>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
