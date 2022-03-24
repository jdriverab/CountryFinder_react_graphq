import { gql, useQuery } from "@apollo/client";
import React, {useContext} from "react";
import HomeContainer from './container/HomeContainer/HomeContainer';
import AppProvider, { APPCONTEXT } from './context/AppContext'
import { CountrySelect } from "./context/prueba";



function App() {

  return (
      <AppProvider>
        <HomeContainer/>
        {/* <CountrySelect/> */}
      </AppProvider>
  );
}

export default App;
