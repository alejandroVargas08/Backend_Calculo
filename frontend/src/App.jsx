import { useState } from 'react';
import MenuHamburguesa from './componentes/Menu';
import Inicio from './componentes/Inicio';
import Velocidad from './componentes/Velocidad';
import Aceleracion from './componentes/Aceleracion';
import Fuerza from './componentes/Fuerza';
import Peso from './componentes/Peso';
import EnergiaCinetica from './componentes/EC';
import Tiempo from './componentes/Tiempo';
import Distancia from './componentes/Distancia';


function App() {
  const [paginaActiva, setPagina] = useState("inicio");

  let contenido;
  if (paginaActiva === "velocidad") {
    contenido = <Velocidad />;
  }
  else if (paginaActiva === "distancia") {
    contenido = <Distancia />;
  } 
  else if (paginaActiva === "tiempo") {
    contenido = <Tiempo />;
  }
  else if (paginaActiva === "peso") {
    contenido = < Peso />;
  }
  else if (paginaActiva === "aceleracion") {
    contenido = <Aceleracion />;
  }
  else if (paginaActiva === "fuerza") {
    contenido = <Fuerza />;
  } 
  else if (paginaActiva === "Ec") {
    contenido = <EnergiaCinetica />;
  }
  else {
    contenido = <Inicio />;
  }

  return (
    <>
      <MenuHamburguesa cambiarPagina={setPagina} paginaActiva={paginaActiva} />
      <main>
        {contenido}
      </main>
    </>
  );
}

export default App;