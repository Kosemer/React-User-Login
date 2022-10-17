import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import { Fragment } from "react";

function App() {
  const ctx = useContext(AuthContext);

  // Provider = szolgáltató. Az "<AuthContext.Provider>" eléri minden szülő és gyerek meg annak a gyereke stb.Ja és lehet csomagolóként is használni (<div>, <React.Fragment> helyett). 

  return (
<Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
      </Fragment>
  );
}

export default App;
