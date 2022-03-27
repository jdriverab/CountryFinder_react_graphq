import React from "react";
import AppProvider from './context/AppContext'
import HomeContainer from './container/HomeContainer/HomeContainer';

// Hola Estimados, antes que todo les dejo este mensaje como excusa porque me tome el atrevimiento de realizar la app que pedian en typescript
// esto tambien fue segun la parte que indicaban que podia recomendar tecnologia para aplicar al codigo, me parece que typescript es muy
// buena practica para facilitar al momento de desarrollar, en todo caso espero esto no sea problema en la evaluacion pero si llegan a necesitar
// el codigo en .js me avisan y lo modifico.

//por tiempo no pude hacer la app tanto en js como typescript...

//Espero les agrade y cualquier cosa aunque no sea seleccionado me gustaria su feedback por el codigo.

function App() {

  return (
      <AppProvider>
        <HomeContainer/>
      </AppProvider>
  );
}

export default App;
