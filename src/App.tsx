import React from "react";
import HomeContainer from './container/HomeContainer/HomeContainer';
import AppProvider, { APPCONTEXT } from './context/AppContext'

function App() {

  return (
      <AppProvider>
        <HomeContainer/>
      </AppProvider>
  );
}

export default App;
