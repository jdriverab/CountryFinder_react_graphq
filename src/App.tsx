import { gql, useQuery } from "@apollo/client";
import React, {useContext} from "react";
import HomeContainer from './container/HomeContainer/HomeContainer';
import AppProvider, { APPCONTEXT } from './context/AppContext'
import CountryList from "./context/prueba";

function App() {

  return (
      <AppProvider>
        <HomeContainer/>
        {/* <CountryList/> */}
      </AppProvider>
  );
}

export default App;
